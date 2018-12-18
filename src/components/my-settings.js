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
import { loadSettings } from '../actions/settings.js';

// We are lazy loading its reducer.
import settings from '../reducers/settings.js';
store.addReducers({
  settings
});

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';
import { PaperIconItemStyles } from './paper-icon-item-styles.js';

// These are the elements needed by this element.
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-item/paper-icon-item.js';


// these icons are needed by this elements
import { chevronRight } from '../data/my-icons.js';

class MySettings extends connect(store)(PageViewElement) {
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
          ${Object.keys(this._settings).map((key) => {
            const item = this._settings[key];
            const templateItem = html`
              <paper-icon-item>
                <div slot="item-icon"><svg height='24' viewBox='0 0 24 24' width='24'><path d=${typeof(item.iconPath) != "undefined" ? item.iconPath: ""}></path></svg></div>
                ${item.name}
                <span style="flex: auto;"></span>
                ${chevronRight}
              </paper-icon-item>
            `;
            const linkTemplate = html`
              <a href=${item.href}>${templateItem}<a>
            `;
            return html`
              ${typeof(item.href) != "undefined" ? linkTemplate : templateItem}
            `;
          })}
        </paper-listbox>
      </section>
    `;
  }

  static get properties() {
    return {
      _settings: Object
    }
  }

  constructor() {
    super();
    this._settings = [];
  }

  firstUpdated() {
    store.dispatch(loadSettings());
  }

  stateChanged(state) {
    this._settings = state.settings
  }
}

window.customElements.define('my-settings', MySettings);
