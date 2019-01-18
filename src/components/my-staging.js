import { html } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { connect } from 'pwa-helpers/connect-mixin.js';

// This element is connected to the Redux store.
import { store } from '../store.js';

// These are the actions needed by this element.
import { updateDescription } from '../actions/app.js';

// These are the shared styles needed by this element.
import { SharedStyles } from '../styles/shared-styles.js';

class MyStaging extends connect(store)(PageViewElement) {
  render() {
    store.dispatch(updateDescription(this._description));
    return html`
      ${SharedStyles}
      <section>
        <h1>Documentation in progress</h1>
        <p>
          This documentation is a work in progress. It describes prerelease content, and is subject to change.
        </p>
      </section>
    `
  }

  constructor() {
    super();
    this._description = "Page under construction used by your amazing progressive web application Data-Driven Technological Innovations."
  }
}

window.customElements.define('my-staging', MyStaging);
