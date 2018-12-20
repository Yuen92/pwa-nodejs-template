import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class MyStaging extends PageViewElement {
  render() {
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
}

window.customElements.define('my-staging', MyStaging);
