import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';
import { connect } from 'pwa-helpers/connect-mixin.js';

// This element is connected to the Redux store.
import { store } from '../store.js';

// These are the actions needed by this element.
import { updateDescription } from '../actions/app.js';

// These are the shared styles needed by this element.
import { SharedStyles } from '../styles/shared-styles.js';

class MyView404 extends connect(store)(PageViewElement) {
  render() {
    store.dispatch(updateDescription(this._description));
    return html`
      ${SharedStyles}
      <section>
        <h2>Oops! You hit a 404</h2>
        <p>The page you're looking for doesn't seem to exist. Head back
           <a href="/">home</a> and try again?
        </p>
      </section>
    `
  }

  constructor() {
    super();
    this._description = "Error 404 page used by your amazing progressive web application Data-Driven Technological Innovations."
  }
}

window.customElements.define('my-view404', MyView404);
