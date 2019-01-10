import { LitElement, html } from '@polymer/lit-element';
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
  registerServiceWorker,
  updateAppInstallStatus
} from '../actions/app.js';

// These are the elements needed by this element.
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-scroll-effects/effects/waterfall.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import { menuIcon } from '../data/my-icons.js';
import './snack-bar.js';

class MyApp extends connect(store)(LitElement) {
  render() {
    // Anything that's related to rendering should be done in here.
    return html`
    <style>
      :host {
        --app-drawer-width: 256px;
        display: block;

        --app-primary-color: rgb(0, 155, 230);
        --app-secondary-color: rgb(40, 50, 55);
        --app-third-color: rgb(0, 135, 125);
        --app-fourth-color: rgb(240, 240, 240);
        --app-fifth-color: rgb(120, 145, 155);
        --app-sixth-color: rgb(225, 240, 240);
        --app-seventh-color: rgb(195, 230, 250);
        --app-eighth-color: rgb(210, 220, 220);

        --app-dark-text-color: var(--app-secondary-color);
        --app-light-text-color: white;
        --app-light-secondary-text-color: var(--app-fifth-color);
        --app-section-even-color: var(--app-fourth-color);
        --app-section-odd-color: white;

        --app-header-background-color: var(--app-drawer-background-color);
        --app-header-text-color: var(--app-light-text-color);
        --app-header-selected-color: var(--app-primary-color);

        --app-drawer-background-color: var(--app-secondary-color);
        --app-drawer-text-color: var(--app-light-text-color);
        --app-drawer-selected-color: var(--app-light-secondary-text-color);
      }

      @-webkit-keyframes fadeIn {
        from { opacity: 0 }
          to { opacity: 1 }
      }  
      @keyframes fadeIn {
          from { opacity: 0 }
            to { opacity: 1 }
      }
      @-webkit-keyframes translate {
        from { -webkit-transform: translate(200px) }
          to { -webkit-transform: none }
      }  
      @keyframes translate {
          from { transform: translate(200px) }
            to { transform: none }
      }

      app-header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        text-align: center;
        background: var(--app-header-background-color);
        color: var(--app-header-text-color);
        
        /* Workaround for standalone install application on iOS */
        /* Look Read Me */
        /* transform: translateY(-50px); */
        /* padding-top: 50px; */
      }

      .toolbar-top {
        background: var(--app-header-background-color);
      }

      [main-title] {
        font-size: 30px;
        /* In the narrow layout, the toolbar is offset by the width of the
        drawer button, and the text looks not centered. Add a padding to
        match that button */
        padding-right: 44px;
      }

      .toolbar-list {
        display: none;
      }

      .toolbar-list > a {
        display: inline-block;
        color: var(--app-header-text-color);
        text-decoration: none;
        line-height: 30px;
        padding: 4px 24px;
      }

      .toolbar-list > a[selected] {
        color: var(--app-header-selected-color);
        border-bottom: 4px solid var(--app-header-selected-color);
      }

      .menu-btn {
        background: none;
        border: none;
        fill: var(--app-header-text-color);
        cursor: pointer;
        height: 44px;
        width: 44px;
      }

      .drawer-list {
        box-sizing: border-box;
        width: 100%;
        padding: 24px;
        background: var(--app-drawer-background-color);
        position: relative;
        
        /* Workaround for standalone install application on iOS */
        height: 110%;
        padding-top: 50px;
        transform: translate3d(0,-25px,0);
      }

      .drawer-list > a {
        display: block;
        text-decoration: none;
        color: var(--app-drawer-text-color);
        line-height: 40px;
        padding: 0 24px;
      }

      .drawer-list > a[selected] {
        color: var(--app-drawer-selected-color);
      }

      /* Workaround for IE11 displaying <main> as inline */
      /* Workaround for display header color in standalone iOS when swipe to bottom */
      main {
        display: block;
        background: linear-gradient(to bottom, var(--app-header-background-color) -20%, var(--app-header-background-color) 0%, white 0%,white 100%);
      }

      .main-content {
        padding-top: 64px;
        min-height: 100vh;
      }

      .page {
        display: none;
      }

      .page[active] {
        display: block;
      }

      .page.repeat-view[active] {
        -webkit-animation: fadeIn 1s;
        animation: fadeIn 1s;
      }

      /* Animation Entry*/
      my-app-install.page.repeat-view[active],
      my-staging.page.repeat-view[active] {
        -webkit-animation: fadeIn 1s,translate 500ms;
        animation: fadeIn 1s, translate 500ms;
      }

      footer {
        padding: 24px;
        background: var(--app-header-background-color);
        color: var(--app-drawer-text-color);
        text-align: center;
      }

      /* Wide layout: when the viewport width is bigger than 460px, layout
      changes to a wide layout. */
      @media (min-width: 460px) {
        .toolbar-list {
          display: block;
        }

        .menu-btn {
          display: none;
        }

        .main-content {
          padding-top: 106px;
        }

        /* The drawer button isn't shown in the wide layout, so we don't
        need to offset the title */
        [main-title] {
          padding-right: 0px;
        }
      }
    </style>

    <!-- Header -->
    <app-header condenses reveals effects="waterfall">
      <app-toolbar class="toolbar-top">
        <button class="menu-btn" title="Menu" @click="${this._menuButtonClicked}">${menuIcon}</button>
        <div main-title>${this.appTitle}</div>
      </app-toolbar>

      <!-- This gets hidden on a small screen-->
      <nav class="toolbar-list">
        <a ?selected="${this._page === 'home'}" href="/home">Home</a>
        <a ?selected="${this._page === 'settings' || this._page === 'app-install'}" href="/settings">Settings</a>
        <a ?selected="${this._page === 'counter'}" href="/counter">Counter</a>
        <a ?selected="${this._page === 'shopping'}" href="/shopping">Shopping</a>
      </nav>
    </app-header>

    <!-- Drawer content -->
    <app-drawer id="drawer" .opened="${this._drawerOpened}"
        @opened-changed="${this._drawerOpenedChanged}">
      <nav class="drawer-list">
        <a ?selected="${this._page === 'home'}" href="/home">Home</a>
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

    // Init state
    this._offline = false;
    this._snackbarOpened = false;
    this._drawerOpened = false;

    // Listen first user interaction
    this._listenFirstUserInteraction();

    if(typeof(deferredPrompt) != "undefined") {
      store.dispatch(updateAppInstallStatus(true));
    } else{
      store.dispatch(updateAppInstallStatus(false));
      window.ddti = {}
      window.ddti._updateAppInstallStatus = function(){
        store.dispatch(updateAppInstallStatus(true))
      }
      window.addEventListener('beforeinstallprompt', window.ddti._updateAppInstallStatus);
    }
  }

  firstUpdated() {
    // TODO: rework in order to don't disptach action during the watcher installation
    installRouter((location) => store.dispatch(navigate(decodeURIComponent(location.pathname))));
    installOfflineWatcher((offline) => store.dispatch(updateOffline(offline)));
    installMediaQueryWatcher(`(min-width: 460px)`,
        () => store.dispatch(updateDrawerState(false)));

    // workaround for drawer when using paper-item
    this.shadowRoot.querySelector("app-header").style.zIndex = 1;
    this.shadowRoot.querySelector("app-drawer").style.zIndex = 1;
  }

  updated(changedProps) {
    if (changedProps.has('_page')) {
      const pageTitle = this.appTitle + ' - ' + this._page;
      updateMetadata({
        title: pageTitle,
        description: pageTitle
        // This object also takes an image property, that points to an img src.
      });
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
    this._offline = state.app.offline;
    this._snackbarOpened = state.app.snackbarOpened;
    this._drawerOpened = state.app.drawerOpened;
  }

  _listenFirstUserInteraction(e) {
    // Define listener at window level to remove after the first usage
    window.pwaNodejsTemplate = {};
    window.pwaNodejsTemplate._registerServiceWorkerAndCleanListener = function (e) {
      store.dispatch(registerServiceWorker());
      
      // clean listenFirstUserInteraction listener
      window.removeEventListener("click", window.pwaNodejsTemplate._registerServiceWorkerAndCleanListener)
      window.removeEventListener("touchstart", window.pwaNodejsTemplate._registerServiceWorkerAndCleanListener)
      window.removeEventListener("scroll", window.pwaNodejsTemplate._registerServiceWorkerAndCleanListener)
      window.removeEventListener("mousemove", window.pwaNodejsTemplate._registerServiceWorkerAndCleanListener)
      window.removeEventListener("mousedown", window.pwaNodejsTemplate._registerServiceWorkerAndCleanListener)
      window.removeEventListener("keypress", window.pwaNodejsTemplate._registerServiceWorkerAndCleanListener)
    }

    // listen user interaction passive or active to register service worker
    // List of events to listen https://stackoverflow.com/a/10126042 
    window.addEventListener("click", window.pwaNodejsTemplate._registerServiceWorkerAndCleanListener)
    window.addEventListener("touchstart", window.pwaNodejsTemplate._registerServiceWorkerAndCleanListener)
    window.addEventListener("scroll", window.pwaNodejsTemplate._registerServiceWorkerAndCleanListener)
    window.addEventListener("mousemove", window.pwaNodejsTemplate._registerServiceWorkerAndCleanListener)
    window.addEventListener("mousedown", window.pwaNodejsTemplate._registerServiceWorkerAndCleanListener)
    window.addEventListener("keypress", window.pwaNodejsTemplate._registerServiceWorkerAndCleanListener)
  }
}

window.customElements.define('my-app', MyApp);
