import { LitElement, html } from 'lit-element';
import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';
import { installOfflineWatcher } from 'pwa-helpers/network.js';
import { installRouter } from 'pwa-helpers/router.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';

// This element is connected to the Redux store.
import { store } from '../store.js';

// These are the actions needed by this element.
import {
  navigate,
  updateOffline,
  updateDrawerState,
  updateAppInstallStatus
} from '../actions/app.js';

// These are the elements needed by this element.
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-scroll-effects/effects/waterfall.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import { menuIcon } from '../data/my-icons.js';
import './snack-bar.js';

// Styles
import { AppStyles } from '../styles/app-styles.js';
import { AppStylesMobile } from '../styles/app-styles-mobile-460max.js';
import { AppStylesDesktop } from '../styles/app-styles-desktop-460min.js';

// Static Datas
import { properties } from '../data/app.js';

class MyApp extends connect(store)(LitElement) {
  render() {
    // Workaround due to weird behavior.
    // Init in constructor should be sufficient.
    if(this._description == ""){
      this._description = properties.description;
    }
    return html`
    ${AppStyles}
    ${AppStylesMobile}
    ${AppStylesDesktop}
    <!-- Header -->
    <app-header condenses reveals effects="waterfall">
      <app-toolbar class="toolbar-top">
        <button class="menu-btn" title="Menu" @click="${this._menuButtonClicked}">${menuIcon}</button>
        <div main-title>${this.appTitle}</div>
      </app-toolbar>
    
      <!-- This gets hidden on a small screen-->
      <nav class="toolbar-list">
        <a ?selected="${this._page === 'home'}" href="/">Home</a>
        <a ?selected="${this._page === 'settings' || this._page === 'app-install'}" href="/settings">Settings</a>
        <a ?selected="${this._page === 'counter'}" href="/counter">Counter</a>
        <a ?selected="${this._page === 'shopping'}" href="/shopping">Shopping</a>
      </nav>
    </app-header>
    
    <!-- Drawer content -->
    <app-drawer id="drawer" .opened="${this._drawerOpened}" @opened-changed="${this._drawerOpenedChanged}">
      <nav class="drawer-list">
        <a ?selected="${this._page === 'home'}" href="/">Home</a>
        <a ?selected="${this._page === 'settings'}" href="/settings">Settings</a>
        <a ?selected="${this._page === 'counter'}" href="/counter">Counter</a>
        <a ?selected="${this._page === 'shopping'}" href="/shopping">Shopping</a>
      </nav>
    </app-drawer>
    
    <!-- Main content -->
    <main role="main" class="main-content">
      <my-home class="page" ?active="${this._page === 'home'}"></my-home>
      <my-settings class="page" ?active="${this._page === 'settings'}"></my-settings>
      <my-app-install class="page" ?active="${this._page === 'app-install'}"></my-app-install>
      <my-load-screens class="page" ?active="${this._page === 'load-screens'}"></my-load-screens>
      <my-counter class="page" ?active="${this._page === 'counter'}"></my-counter>
      <my-shopping class="page" ?active="${this._page === 'shopping'}"></my-shopping>
      <my-staging class="page" ?active="${this._page === 'staging'}"></my-staging>
      <my-view404 class="page" ?active="${this._page === 'view404'}"></my-view404>
    </main>
    
    <footer>
      <p>Made with &hearts; for performance</p>
    </footer>
    
    <snack-bar ?active="${this._snackbarOpened}">
      You are now ${this._offline ? 'offline' : 'online'}.</snack-bar>
    `;
  }

  static get properties() {
    return {
      appTitle: { type: String },
      _description: { type: String },
      _author: { type: String },
      _ldJson: { type: Object },
      _page: { type: String },
      _drawerOpened: { type: Boolean },
      _snackbarOpened: { type: Boolean },
      _offline: { type: Boolean }
    }
  }

  constructor() {
    super();
    // To force all event listeners for gestures to be passive.
    // See https://www.polymer-project.org/3.0/docs/devguide/settings#setting-passive-touch-gestures
    setPassiveTouchGestures(true);

    // Init Properties
    // If properties declared in HTML it will be replace by HTML declarative value
    this.appTitle = properties.title;
    this._description = properties.description;
    this._author = properties.author;
    this._ldJson = properties.ldJson;
    this._offline = false;
    this._snackbarOpened = false;
    this._drawerOpened = false;

    // Listen first user interaction
    this._listenFirstUserInteraction();

    if (typeof (deferredPrompt) != "undefined") {
      store.dispatch(updateAppInstallStatus(true));
    } else {
      store.dispatch(updateAppInstallStatus(false));
      window.ddti = {}
      window.ddti._updateAppInstallStatus = function () {
        store.dispatch(updateAppInstallStatus(true))
      }
      window.addEventListener('beforeinstallprompt', window.ddti._updateAppInstallStatus);
    }
  }

  firstUpdated() {
    // TODO: rework in order to don't disptach action during the watcher installation
    installRouter((location) => store.dispatch(navigate(decodeURIComponent(location.pathname))));
    if(window.performance){
      window.performance.mark('dispatchUpdateOfflineDueToInstallOfflineWatcher-start');
    }
    installOfflineWatcher((offline) => store.dispatch(updateOffline(offline)));
    if(window.performance){
      window.performance.mark('dispatchUpdateOfflineDueToInstallOfflineWatcher-end');
      performance.measure(
        "dispatchUpdateOfflineDueToInstallOfflineWatcher",
        "dispatchUpdateOfflineDueToInstallOfflineWatcher-start",
        "dispatchUpdateOfflineDueToInstallOfflineWatcher-end"
      );
      window.performance.mark('dispatchUpdateDrawerStateDueToInstallMediaQueryWatcher-start');
    }
    installMediaQueryWatcher(`(min-width: 460px)`, () => store.dispatch(updateDrawerState(false)));
    if(window.performance){
      window.performance.mark('dispatchUpdateDrawerStateDueToInstallMediaQueryWatcher-end');
      performance.measure(
        "dispatchUpdateDrawerStateDueToInstallMediaQueryWatcher",
        "dispatchUpdateDrawerStateDueToInstallMediaQueryWatcher-start",
        "dispatchUpdateDrawerStateDueToInstallMediaQueryWatcher-end"
      );
    }
    
    // workaround for drawer when using paper-item
    this.shadowRoot.querySelector("app-header").style.zIndex = 1;
    this.shadowRoot.querySelector("app-drawer").style.zIndex = 1;
  }

  updated(changedProps) {
    if (changedProps.has('_page')) {
      var pageFormated = this._page.charAt(0).toUpperCase() + this._page.slice(1);
      const pageTitle = this.appTitle + ' - ' + pageFormated;
      updateMetadata({
        title: pageTitle
        // This object also takes an image property, that points to an img src.
      });
    }
    if (changedProps.has('_description')) {
      updateMetadata({
        description: this._description
        // This object also takes an image property, that points to an img src.
      });
    }
    if (changedProps.has('_author')) {
      var element = document.querySelector("meta[name=author]");
      element.setAttribute("content", this._author);
    }
    if (changedProps.has('_ldJson')) {
      var element = document.querySelector("script[type='application/ld+json']");
      element.textContent = JSON.stringify(this._ldJson);
    }
  }

  _menuButtonClicked() {
    store.dispatch(updateDrawerState(true));
  }

  _drawerOpenedChanged(e) {
    store.dispatch(updateDrawerState(e.target.opened));
  }

  stateChanged(state) {
    this._page = state.app.page;
    this._description = state.app.description;
    this._offline = state.app.offline;
    this._snackbarOpened = state.app.snackbarOpened;
    this._drawerOpened = state.app.drawerOpened;
  }

  _listenFirstUserInteraction(e) {
    // Define listener at window level to remove after the first usage
    window.pwaNodejsTemplate = {};
    window.pwaNodejsTemplate._firstUserInteractionAndCleanListener = function (e) {
      // First user interaction
      console.log("Welcome user !")

      // clean listenFirstUserInteraction listener
      window.removeEventListener("click", window.pwaNodejsTemplate._firstUserInteractionAndCleanListener)
      window.removeEventListener("touchstart", window.pwaNodejsTemplate._firstUserInteractionAndCleanListener)
      window.removeEventListener("scroll", window.pwaNodejsTemplate._firstUserInteractionAndCleanListener)
      window.removeEventListener("mousemove", window.pwaNodejsTemplate._firstUserInteractionAndCleanListener)
      window.removeEventListener("mousedown", window.pwaNodejsTemplate._firstUserInteractionAndCleanListener)
      window.removeEventListener("keypress", window.pwaNodejsTemplate._firstUserInteractionAndCleanListener)
    }

    // listen user interaction passive or active to register service worker
    // List of events to listen https://stackoverflow.com/a/10126042 
    window.addEventListener("click", window.pwaNodejsTemplate._firstUserInteractionAndCleanListener)
    window.addEventListener("touchstart", window.pwaNodejsTemplate._firstUserInteractionAndCleanListener)
    window.addEventListener("scroll", window.pwaNodejsTemplate._firstUserInteractionAndCleanListener)
    window.addEventListener("mousemove", window.pwaNodejsTemplate._firstUserInteractionAndCleanListener)
    window.addEventListener("mousedown", window.pwaNodejsTemplate._firstUserInteractionAndCleanListener)
    window.addEventListener("keypress", window.pwaNodejsTemplate._firstUserInteractionAndCleanListener)
  }
}

window.customElements.define('my-app', MyApp);
