/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

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
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-item/paper-icon-item.js';

// these icons are needed by this elements
import { chevronRight, home, cloudDownload, locationOn, fullscreen, call, accountCircle, notifications } from './my-icons.js';

class MySettings extends connect(store) (PageViewElement) {
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
        <paper-listbox>
          <a href="/settings/app-install">
            <paper-icon-item @click="${this._appInstallClicked}">
              <div slot="item-icon">${home}</div>
              <div style="flex: auto;">Application Install</div>
              ${chevronRight}
            </paper-icon-item>
          </a>
          </paper-icon-item>
          <paper-icon-item>
            <div slot="item-icon">${cloudDownload}</div>
            <div style="flex: auto;">Load All Screens</div>
            ${chevronRight}
          </paper-icon-item>
          <paper-icon-item>
            <div slot="item-icon">${locationOn}</div>
            Enable Location
            <span style="flex: auto;"></span>
            ${chevronRight}
          </paper-icon-item>
          <paper-icon-item>
            <div slot="item-icon">${fullscreen}</div>
            Enable Fullscreen
            <span style="flex: auto;"></span>
            ${chevronRight}
          </paper-icon-item>
          <paper-icon-item>
            <div slot="item-icon">${call}</div>
            Call
            <span style="flex: auto;"></span>
            ${chevronRight}
          </paper-icon-item>
          <paper-icon-item>
            <div slot="item-icon">${accountCircle}</div>
            Auto Sign-in
            <span style="flex: auto;"></span>
            ${chevronRight}
          </paper-icon-item>
          <paper-icon-item>
            <div slot="item-icon">${notifications}</div>
            Enable Push Notifications
            <span style="flex: auto;"></span>
            ${chevronRight}
          </paper-icon-item>
        </paper-listbox>
      </section>
    `;
  }

  _appInstallClicked(e) {
    store.dispatch(promptAppInstallBanner());
  }
}

window.customElements.define('my-settings', MySettings);
