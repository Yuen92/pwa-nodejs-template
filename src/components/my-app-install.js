import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';
import { connect } from 'pwa-helpers/connect-mixin.js';

// This element is connected to the Redux store.
import { store } from '../store.js';

// These are the actions needed by this element.
import {
  promptAppInstallBanner
} from '../actions/app.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';
import { PaperIconItemStyles } from './paper-icon-item-styles.js';

// These are the elements needed by this element.
import '@polymer/paper-item/paper-icon-item.js';

// these datas are needed by this elements
import { chevronRight, home, help} from '../data/my-icons.js';
import { appInstallMinimum } from "../data/app-install.js";

class MyAppInstall extends connect(store) (PageViewElement) {
  render() {
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
        <h1>Help - A2HS</h1>
          ${Object.keys(this._datas).map((key) => {
            const item = this._datas[key];
            const disabled = item.beforeinstallpromptImplemented ? !this._appInstallAvailable : this._appInstallAvailable;
            const templateItem = html`
              <paper-icon-item role="none" @click="${item.promptAppInstallBanner ? this._promptAppInstallBanner : false}" ?disabled="${disabled}">
                <div slot="item-icon"><svg height='24' viewBox='0 0 24 24' width='24'><path d=${typeof(item.iconPath) != "undefined" ? item.iconPath: ""}></path></svg></div>
                <div style="flex: auto;">${item.name}</div>
                ${item.promptAppInstallBanner ? "" : chevronRight}
              </paper-icon-item>
            `;
            const linkTemplate = html`
              <a  href=${item.href} aria-label="${item.name}">${templateItem}</a>
            `;
            return html`
              ${(typeof(item.href) != "undefined" && !disabled) ? linkTemplate : templateItem}
            `;
          })}
      </section>
    `;
  }

  static get properties() {
    return {
      _datas : {type: Object },
      _appInstallAvailable: { type: Boolean }
    }
  }

  constructor(){
    super();
    this._datas = appInstallMinimum
  }

  stateChanged(state) {
    this._appInstallAvailable = state.app.appInstallAvailable;
  }

  _promptAppInstallBanner(e) {
    store.dispatch(promptAppInstallBanner());
  }

  _featureInDevelopment(e) {
    alert("Feature in development.")
  }
}

window.customElements.define('my-app-install', MyAppInstall);
