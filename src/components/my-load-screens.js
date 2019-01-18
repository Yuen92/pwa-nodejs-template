import { html } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { connect } from 'pwa-helpers/connect-mixin.js';

// This element is connected to the Redux store.
import { store } from '../store.js';

// These are the actions needed by this element.
import { updateDescription } from '../actions/app.js';
// import { loadSettings } from '../actions/settings.js';


// We are lazy loading its reducer.
// import settings from '../reducers/settings.js';
// store.addReducers({
//   settings
// });

// These are the shared styles needed by this element.
import { SharedStyles } from '../styles/shared-styles.js';
import { PaperIconItemStyles } from './paper-icon-item-styles.js';

// These are the elements needed by this element.
import '@polymer/paper-item/paper-icon-item.js';


// these icons are needed by this elements
import { chevronRight } from '../data/my-icons.js';

class MyLoadScreens extends connect(store)(PageViewElement) {
  render() {
    store.dispatch(updateDescription(this._description));
    return html`
      ${SharedStyles}
      ${PaperIconItemStyles}
      <custom-style>
        <style is="custom-style">
          section {
            padding-left: 0px;
            padding-right: 0px;
          }
          a {
            transform: translate(-16px);
            display: block;
            margin: 10px auto;
            padding: 0px 16px;
          }
          /* Align with paper-icon-item*/
          a paper-icon-item {
            width: 100%;
            padding: 0 16px;
          }
          /* vertical-align is used for iPhone */
          svg {
            fill: currentColor;
            margin-left: auto;
            vertical-align: middle;
          }
          /* div flex:auto is used for iPhone due to svg margin-left not work*/
        </style>
      </custom-style>
      <section>
        <h1>Settings</h1>
        ${Object.keys(this._screensCached).map((key) => {
          const this1 = this;
          const item = this._screensCached[key];
          const templateItem = html`
            <paper-icon-item role="none" @click="${() => this1._loadScreen(item)}">
              <div slot="item-icon"><svg height='24' viewBox='0 0 24 24' width='24'><path d=${typeof(item.iconPath) != "undefined" ? item.iconPath: ""}></path></svg></div>
              <div style="flex: auto;">${item.url}</div>
              ${chevronRight}
            </paper-icon-item>
          `;
          const linkTemplate = html`
            <a href=${item.href} aria-label="${item.name}">${templateItem}</a>
          `;
          return html`
            ${typeof(item.href) != "undefined" ? linkTemplate : templateItem}
          `;
        })}
      </section>
    `;
  }

  static get properties() {
    return {
      _screensCached: Object
    }
  }

  constructor() {
    super();
    this._screensCached = [];
    this._description = "Settings page which allows to manage screens available in offline mode. Allow to load page you want to use without network/internet.";
  }

  firstUpdated() {
    //store.dispatch(loadSettings());
    this._logFilesFromCaches()
  }

  stateChanged(state) {
    //this._screensCached = state._screensCached
  }

  _loadScreen(item){
    console.log(item);
    console.log("update the file : " + item.url);
  }

  _logFilesFromCaches () {
    var this1 = this;
    window.caches.keys().then(function(cacheNames) {
      cacheNames.forEach(function(cacheName) {
        var this2 = this1;
        window.caches.open(cacheName).then(function(cache) {
          return cache.keys();
        }).then(function(requests) {
          requests.forEach(function(request) {
            if(/\/src\/components/.test(request.url) && !/my-app\.js/.test(request.url)){
              this2._updateScreens(request)
            }
          });
          return requests;
        });
      });
      return cacheNames;
    });
  }

  _updateScreens(request){
    this._screensCached.push(request);
    this.update(this._screensCached);
    console.log(this._screensCached);
  }
}

window.customElements.define('my-load-screens', MyLoadScreens);
