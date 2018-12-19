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

// these icons are needed by this elements
import { chevronRight, home, help} from '../data/my-icons.js';

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
          <paper-icon-item @click="${this._appInstallClicked}" ?disabled="${!this._appInstallAvailable}">
            <div slot="item-icon">${home}</div>
            <div style="flex: auto;">Application Install</div>
            ${chevronRight}
          </paper-icon-item>
          </paper-icon-item>
          <paper-icon-item @click="${this._featureInDevelopment}">
            <div slot="item-icon">${help}</div>
            <div style="flex: auto;">Help - Enable Feature</div>
            ${chevronRight}
          </paper-icon-item>
      </section>
    `;
  }

  static get properties() {
    return {
      _appInstallAvailable: { type: Boolean }
    }
  }

  stateChanged(state) {
    this._appInstallAvailable = state.app.appInstallAvailable;
  }

  _appInstallClicked(e) {
    store.dispatch(promptAppInstallBanner());
  }

  _featureInDevelopment(e) {
    alert("Feature in development.")
  }
}

window.customElements.define('my-app-install', MyAppInstall);
