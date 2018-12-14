import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class MyHome extends PageViewElement {
  render() {
    return html`
      ${SharedStyles}
      <section>
        <h1>Data-Driven Technologicals Innovations</h1>
        <p>
          This amazing application "<a href="/">Data-Driven Technologicals Innovations</a>" applies the latest technology available around the web to improve digital business.
        </p>
        <p>
          The data-driven model is used to provide in the fastest way the last features possibles.
          Obviously the latest innovations respect basic best practices.
        </p>
      </section>
      <section>
        <h2>Basic Best Practices</h2>
        <p>
          Because it's always good to remember the basics, below the minimum checklist :
        </p>
        <ul>
          <li>Build a good mobile experience using a responsive layout (related to Responsive Web Design originally designed by <a href="http://alistapart.com/article/responsive-web-design/">Ethan Marcotte in A List
          Apart</a>)</li>
          <li>Loading fast or people will leave before to see your content (source : <a href="https://soasta.com/blog/google-mobile-web-performance-study/">SOASTA Google study report</a>)</li>
          <li>Easy to find on search engines as well as on social networks or specialized websites</li>
        </ul>
      </section>
      <section>
        <h2>Latest Features</h2>
        <p>
          The latest features make it easy to engage the users and build a strong relationship with them.
          "<a href="/">Data-Driven Technologicals Innovations</a>" uses all of these features :
        </p>
        <ul>
          <li>Usage in offline mode to use it everywhere and anytime</li>
          <li>Install it as a mobile application</li>
          <li>Receive notifications to stay tuned for the latest contents</li>
        </ul>
      </section>
      <section>
        <h2>Technologicals Innovations</h2>
        <p>
          The technologicals innovations allow to support these latest features and provide the best user experience.
          "<a href="/">Data-Driven Technologicals Innovations</a>" uses these technologicals innovations :
        </p>
        <ul>
          <li>Usage of the <a href="https://developers.google.com/web/fundamentals/performance/rail>Response Animation Idle Load model (RAIL)</a></li>
          <li><a href="https://developers.google.com/web/fundamentals/architecture/app-shell">App Shell software architecture<a></li>
          <li><a href="https://developers.google.com/web/fundamentals/design-and-ux/responsive/patterns">Responsive Web Design pattern (RWD)</a></li>
          <li><a href="https://developers.google.com/web/fundamentals/performance/prpl-pattern/">Push Render Pre-cache Lazy-load pattern (PRPL)</a></li>
          <li><a href="https://cloudplatform.googleblog.com/2015/10/Full-Speed-Ahead-with-HTTP2-on-Google-Cloud-Platform.html">HTTP2/Server-push</a></li>
          <li><a href="https://developers.google.com/web/fundamentals/design-and-ux/responsive/patterns">Responsive Web Design pattern</a></li>
          <li><a href="https://redux.js.org/">Redux for state management</a></li>
          <li><a href="https://developers.google.com/web/progressive-web-apps/">Progressive Web Application (PWA)</a></li>
        </ul>
      </section>
    `;
  }
}

window.customElements.define('my-home', MyHome);
