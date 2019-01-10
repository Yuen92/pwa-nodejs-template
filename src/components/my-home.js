import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from '../styles/shared-styles.js';

class MyHome extends PageViewElement {
  render() {
    return html`
      ${SharedStyles}
      <custom-style>
        <style is="custom-style">
          /* :first-of-type doesn't work on iPhone */
          section.first  > *{
            max-width: 600px;
          }
          section.first {
            box-shadow: none;
            display: block;
          }
          section.first h1 {
            color: var(--app-section-even-color);
          }
          section.first article {
            color: var(--app-light-text-color);
          }
          section.primary {
            box-shadow: 0 0 5px rgba(0,0,0,.2);
          }
          section, article {
            height: fit-content;
          }
          section.cards-container {
            padding: 0px;
          }
          article.secondary {
            padding: 24px 24px;
            box-shadow: 0 0 5px rgba(0,0,0,.2);
          }
          aside {
            font-size: 12px;
            background: var(--app-sixth-color);
            padding: 1px 20px 1px 20px;
            box-shadow: 0 0 5px rgba(0,0,0,.2);
            border-radius: 5px;
            color: var(--app-primary-color);
          }
          aside a {
            color: var(--app-primary-color);
          }
          ul {
            list-style-type: square;
          }

          @media (min-device-width: 767px){
            section.first{
              background-image: url(./images/desktop/ddti.jpg);
              background-size: cover;
            }
            .wrapper {
              max-width: 1280px;
              display: flex;
              flex-wrap: wrap;
            }
            .wrapper > section {
              margin: 12px auto;
            }
            .primary{
              width: calc(100% - 72px);
            }
            .secondary {
              width: calc(100% - 72px);
            }
            article.secondary {
              margin: 12px auto;
              box-shadow: 0 0 5px rgba(0,0,0,.2);
            }
          }
          @media (max-device-width: 767px){
            /* Do not use "background-size: cover;" or it will break the workaround with transform translate for iPhone */
            section.first{
              background-image: url(./images/mobile/ddti.jpg);
              transform: translateY(-70px);
              padding-top: 70px;
              margin-bottom: -70px;
            }
          }
        </style>
      </custom-style>
      <section class="first">
        <article>
          <h1>Data-Driven Technological Innovations</h1>
          <p>
            This amazing application "<a href="/">Data-Driven Technological Innovations</a>" applies the latest technology available around the web to improve digital business.
          </p>
          <p>
            The data-driven model is used to provide in the fastest way the last features possibles.
            Obviously the latest innovations respect basic best practices.
          </p>
        </article>
      </section>
      <section class="cards-container">
        <div class="wrapper">
          <section class="primary">
            <article>
              <h2>Basic Best Practices</h2>
              <p>
                Because it's always good to remember the basics, below the minimum checklist:
              </p>
              <ul>
                <li><b>User Friendly:</b> Build a good mobile experience using a responsive layout.</li>
                <li><b>Smooth Running:</b> Loading fast and quick response or people will leave before to see your content.</li>
                <li><b>Strong Popularity:</b> Easy to find on search engines as well as on social networks or specialized websites</li>
              </ul>
            </article>
            <aside>
              <p>
                <b>User Friendly:</b> Responsive layout is related to the Responsive Web Design originally designed by <a href="http://alistapart.com/article/responsive-web-design/">Ethan Marcotte in A List
                Apart</a>
              </p>
              <p>
                <b>Smooth Running:</b> See resources <a href="https://soasta.com/blog/google-mobile-web-performance-study/">SOASTA Google study report related to "Mobile Load Time and User Abandonment"</a>
              </p>
            </aside>
          </section>
          <section class="primary">
            <article>
              <h2>Latest Features</h2>
              <p>
                The latest features make it easy to engage the users and build a strong relationship with them.
                "<a href="/">Data-Driven Technological Innovations</a>" uses all of these features:
              </p>
              <ul>
                <li>Usage in offline mode to use it everywhere and anytime</li>
                <li>Install it as a mobile application</li>
                <li>Receive notifications to stay tuned for the latest contents</li>
              </ul>
            </article>
          </section>
          <section class="primary">
            <article>
              <h2>Technological Innovations</h2>
              <p>
                The technological innovations allow to support these latest features and provide the best user experience.
                "<a href="/">Data-Driven Technological Innovations</a>" uses these technological innovations:
              </p>
              <ul>
                <li>Response Animation Idle Load model (RAIL)</li>
                <li>App Shell software architecture</li>
                <li>Responsive Web Design pattern (RWD)</li>
                <li>Push Render Pre-cache Lazy-load pattern (PRPL)</li>
                <li>HTTP/2 Request/Response Multiplexing</li>
                <li>HTTP/2 Server-push</li>
                <li>Redux for state management</li>
                <li>Progressive Web Application (PWA)</li>
                <li>Web Components</li>
              </ul>
            </article>
          </section>
        </div>
      </section>
      <section class="cards-container">
        <div class="wrapper">
          <article class="secondary">
            <h3><a href="https://developers.google.com/web/fundamentals/performance/rail">Response Animation Idle Load model (RAIL)</a></h3>
            <p>
              <a href="https://developers.google.com/web/fundamentals/performance/rail">RAIL</a> is a user-centric performance model that breaks down the user's experience into key actions. 
            </p>
            <p>
              This model has been presented initially during the <a href="https://www.youtube.com/watch?v=wO9GGY17NXY">Chrome Dev Summit 2015</a> and Google documents it on <a href="https://developers.google.com/web/fundamentals/performance/rail">Web Fundamentals | Google Developers</a> website.
            </p>
          </article>
          <article class="secondary">
            <h3><a href="https://developers.google.com/web/fundamentals/architecture/app-shell">App Shell software architecture</a></h3>
            <p>
              App Shell architecture is one of the best way to build a performing website or Progressive Web Application. It allows to provide reliable application that instantly loads on your users' screens, similar to what you see in native applications.
            </p>
            <p>
              This architecture has been presented by Web teams at Google throught <a href="https://developers.google.com/web/updates/2015/11/app-shell">Google Developers</a> website.
            </p>
            <p>
              Google documents it on <a href="https://developers.google.com/web/fundamentals/architecture/app-shell">Web Fundamentals | Google Developers</a> website and <a href="https://www.youtube.com/watch?v=QhUzmR8eZAo"> Google Chrome Developers</a> youtube channel.
              They also recommand to use it in their <a href="https://support.google.com/google-ads/answer/7336597">Google Ads Support</a>. It shows how beneficial it is to adopt this architecture even to optimize digital media campaign and increase your popularity.
            </p>
          </article>
          <article class="secondary">
            <h3><a href="https://developers.google.com/web/fundamentals/design-and-ux/responsive/patterns">Responsive Web Design pattern (RWD)</a></h3>
            <p>
              Responsive web design patterns aim to improve the user experience by keeping your website user friendly across desktop and mobile.
            </p>
            <p>
              These patterns originally identified by <a="https://www.lukew.com/ff/entry.asp?1514">Luke Wroblewski</a> and are broadcasted by Google throught <a="https://developers.google.com/web/fundamentals/design-and-ux/responsive/patterns">Web Fundamentals | Google Developers</a> website.
            </p>
          </article>
          <article class="secondary">
            <h3><a href="https://developers.google.com/web/fundamentals/performance/prpl-pattern/">Push Render Pre-cache Lazy-load pattern (PRPL)</a></h3>
            <p>
              <a href="https://developers.google.com/web/fundamentals/performance/prpl-pattern/">PRPL pattern</a> was initially introduce by the Polymer team during the <a href="https://www.youtube.com/watch?v=J4i0xJnQUzU">Google I/O 2016</a> and presented during the <a href="https://www.youtube.com/watch?v=RWLzUnESylc">Google Chrome Dev Summit 2016</a>.
            </p>
            <p>
              This pattern is documented by Google throught <a href="https://developers.google.com/web/fundamentals/performance/prpl-pattern/">Web Fundamentals | Google Developers</a> website.
            </p>
          </article>
          <article class="secondary">
            <h3><a href="https://cloudplatform.googleblog.com/2015/10/Full-Speed-Ahead-with-HTTP2-on-Google-Cloud-Platform.html">HTTP/2 Request/Response Multiplexing</a></h3>
            <p>
              <a href="https://developers.google.com/web/fundamentals/performance/http2/#request_and_response_multiplexing">HTTP/2 Request/Response Multiplexing</a> allows to improve the website loading performance by removing the browser limitation due to <a href="https://hpbn.co/http1x/#using-multiple-tcp-connections">parallel TCP connections limit</a>. It's like authorized the delivery of an infinity of products whereas with HTTP/1.x you were limited to 6.
            </p>
          </article>
          <article class="secondary">
            <h3><a href="https://developers.google.com/web/fundamentals/performance/http2/">HTTP/2 Server-push</a></h3>
            <p>
              <a href="https://developers.google.com/web/fundamentals/performance/http2/#server_push">HTTP/2-push or Server-Push</a> is a part of the <a href="https://developers.google.com/web/fundamentals/performance/prpl-pattern/">PRPL pattern</a>. This new feature of HTTP/2 allows to improve the website loading performance by sending multiple responses for a single browser request. It's like provide an answer to a question you want to ask before you ask it.
            </p>
          </article>
          <article class="secondary">
            <h3><a href="https://redux.js.org/">Redux for state management</a></h3>
            <p>
              <a href="https://redux.js.org/">Redux</a> is a small state management container, that is view agnostic and widely used. It is centered around the idea of separating the website logic (the application state) from the view layer, and having the store as a single source of truth for the application state.
            </p>
          </article>
          <article class="secondary">
            <h3><a href="https://developers.google.com/web/progressive-web-apps/">Progressive Web Application (PWA)</a></h3>
            <p>
              <a href="https://developers.google.com/web/progressive-web-apps/">PWA</a> was introduced during the <a href="https://www.youtube.com/watch?v=g7f1Az5fxgU">Chrome Dev Summit 2015</a> and presented on <a href="https://developers.google.com/web/updates/2015/12/getting-started-pwa">Google Developers</a> website.
            </p>
            <p>
              <a href="https://developers.google.com/web/progressive-web-apps/">PWA</a> aims to improve the user experience and promise to get the best of the 2 worlds : Web and Native Mobile Application.
            </p>  
            <p>
              In 2 words, the users can easily access to the <a href="https://developers.google.com/web/progressive-web-apps/">PWA</a> like a website without the need to download all pages of the website like native mobile application do.
            </p>  
            <p>
              In other part, progressively the users transform their <a href="https://developers.google.com/web/progressive-web-apps/">PWA</a> into an application like the native mobile application and allow the user to use it without network and have a reliable, fast and engaging experience. 
            </p>
          </article>
          <article class="secondary">
            <h3><a href="https://developers.google.com/web/fundamentals/web-components/">Web Components</a></h3>
            <p>
              <a href="https://developers.google.com/web/fundamentals/web-components/">Web Components</a> was introduce during the <a href="https://developers.google.com/web/updates/2014/01/Yo-Polymer-A-Whirlwind-Tour-Of-Web-Component-Tooling">Chrome Dev Summit 2014</a> with Polymer as the future of the web.
            </p>
            <p>
              Google documents it on <a href="https://developers.google.com/web/fundamentals/web-components/">Web Fundamentals | Google Developers</a> website and allows the community to use and share web components on the <a href="https://www.webcomponents.org/introduction">webcomponents.org</a> website.
            </p>
            <p>
              Web components allow to create new custom, reusable, encapsulated HTML tags to use in web pages and web apps. One of interesting promise is the interoperability so web component will work and display in the same way around all browser and environment.
            </p>
          </article>
        </div>
      </section>
    `;
  }
}

window.customElements.define('my-home', MyHome);
