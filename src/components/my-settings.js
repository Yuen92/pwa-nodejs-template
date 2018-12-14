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

// These are the elements needed by this element.
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-item/paper-item.js';

class MySettings extends PageViewElement {
  render() {
    return html`
      ${SharedStyles}
      <custom-style>
        <style is="custom-style">
          paper-item {
            cursor: pointer;
            color: #039be5;
            --paper-item-focused: {
              background: rgb(195, 230, 250);
            };
            --paper-item-selected: {
              background: rgb(225, 245, 250)
            }
            --paper-item-focused-before: {
              background: none;
            }
            margin: 10px;
            box-shadow: 0 2px 5px 0 rgba(0,0,0,.26);
          }
          paper-item:active, paper-item:hover {
            background-color: #e1f3fc;
          }
          
          paper-item:active {
            background-color: #c3e7f9
          }
        </style>
      </custom-style>
      <section>
        <h1>Settings</h1>
        <paper-listbox>
          <paper-item>Application Install</paper-item>
          <paper-item>Load All Screens</paper-item>
          <paper-item>Enable Location</paper-item>
          <paper-item>Enable Fullscreen</paper-item>
          <paper-item>Call</paper-item>
          <paper-item>Auto Sign-in</paper-item>
          <paper-item>Enable Push Notifications</paper-item>
        </paper-listbox>
      </section>
    `;
  }
}

window.customElements.define('my-settings', MySettings);
