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

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';
import { PaperItemStyles } from './paper-item-styles.js';
import { PaperIconItemStyles } from './paper-icon-item-styles.js';
import { keyboardArrowRight } from './my-icons.js';

// These are the elements needed by this element.
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-item/paper-icon-item.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import './setting-item.js';

class MySettings extends PageViewElement {
  render() {
    return html`
      ${SharedStyles}
      ${PaperItemStyles}
      ${PaperIconItemStyles}
      <custom-style>
        <style is="custom-style">
          section {
            padding-left: 0px;
            padding-right: 0px;
          }
          svg {
            margin-left: auto;
            fill: currentColor
          }
        </style>
      </custom-style>
      <section>
        <h1>Settings</h1>
        <paper-listbox>
          <paper-icon-item>
            <iron-icon icon="search" slot="item-icon"></iron-icon>
            Application Install
            ${keyboardArrowRight}
          </paper-icon-item>
          </paper-icon-item>
          <paper-icon-item>
            <iron-icon icon="icons:home" slot="item-icon"></iron-icon>
            Load All Screens
            ${keyboardArrowRight}
          </paper-icon-item>
          <paper-icon-item>
            <iron-icon icon="inbox" slot="item-icon"></iron-icon>
            Enable Location
            ${keyboardArrowRight}
          </paper-icon-item>
          <paper-icon-item>
            <iron-icon icon="icons:home" slot="item-icon"></iron-icon>
            Enable Fullscreen
            ${keyboardArrowRight}
          </paper-icon-item>
          <paper-icon-item>
            <iron-icon icon="icons:home" slot="item-icon"></iron-icon>
            Call
            ${keyboardArrowRight}
          </paper-icon-item>
          <paper-icon-item>
            <iron-icon icon="icons:home" slot="item-icon"></iron-icon>
            Auto Sign-in
            ${keyboardArrowRight}
          </paper-icon-item>
          <paper-icon-item>
            <iron-icon icon="icons:home" slot="item-icon"></iron-icon>
            Enable Push Notifications
            ${keyboardArrowRight}
          </paper-icon-item>
        </paper-listbox>
      </section>
    `;
  }
}

window.customElements.define('my-settings', MySettings);
