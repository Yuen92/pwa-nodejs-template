import { LitElement, html } from 'lit-element';

// These are the shared styles needed by this element.
import { SharedStyles } from '../styles/shared-styles.js';

export class HeroBanner extends LitElement {
  render() {
    return html`
      ${SharedStyles}
      <style>
        :host {
          display: block;
          color: var(--app-light-text-color);
        }
        h1 {
          text-align: center;
          color: var(--app-section-even-color);
        }
        section {
          box-shadow: none;
          display: block;
          padding: 1.5rem;
          background-color: var(--app-secondary-color);
        }
        /* 320x635 */
        section {
          background-image: url(./images/320w/ddti_960w_1x.jpg);
          background-image: -webkit-image-set(url(./images/320w/ddti_960w_1x.webp) 1x, url(./images/320w/ddti_960w_1x.jpg) 2x);
          background-size: cover;
        }
        
        @media (min-width: 321px){
          /* 640x400 */
          /* Google Page Speed on mobile choose to load jpg instead of webp. Don't know why.
          /* https://developers.google.com/speed/pagespeed/insights/?hl=fr&url=https%3A%2F%2Fwww.thomas-bianconi.com */
          section {
            background-image: url(./images/640w/ddti_960w_1x.jpg);
            background-image: -webkit-image-set(url(./images/640w/ddti_960w_1x.webp) 1x, url(./images/640w/ddti_960w_1x.jpg) 2x);
            background-size: cover;
          }
        }

        @media (min-width: 641px){
          /* 960x350 */
          section {
            background-image: url(./images/960w/ddti_960w_1x.jpg);
            background-image: -webkit-image-set(url(./images/960w/ddti_960w_1x.webp) 1x, url(./images/960w/ddti_960w_1x.jpg) 2x);
            background-size: cover;
          }
        }
        @media (min-width: 961px){
          /* 1280x350 */
          section {
            background-image: url(./images/1280w/ddti_1280w_1x.jpg);
            background-image: -webkit-image-set(url(./images/1280w/ddti_1280w_1x.webp) 1x, url(./images/1280w/ddti_1280w_1x.jpg) 2x);
            background-size: cover;
          }
        }
        @media (min-width: 1281px){
          /* 1600x350 */
          section {
            background-image: url(./images/1600w/ddti_1600w_1x.jpg);
            background-image: -webkit-image-set(url(./images/1600w/ddti_1600w_1x.webp) 1x, url(./images/1600w/ddti_1600w_1x.jpg) 2x);
            background-size: cover;
          }
        }
        @media (min-width: 1601px){
          /* 1920x350 */
          section {
            background-image: url(./images/1920w/ddti_1x.jpg);
            background-image: -webkit-image-set(url(./images/1920w/ddti_1x.webp) 1x, url(./images/1920w/ddti_1x.jpg) 2x);
            background-size: cover;
          }
        }
        @media (min-width: 1921px){
          section {
            background-image: url(./images/max/ddti_1x.jpg);
            background-image: -webkit-image-set(url(./images/max/ddti_1x.webp) 1x, url(./images/max/ddti_1x.jpg) 2x);
            background-size: cover;
          }
        }
      </style>
      <section>
        <article>
          <h1>${this.title}</h1>
          ${
              Object.keys(this.contents).map((content) => {
                  // For each paragraph in the Hero Banner Section
                  const text = this.contents[content].text;
                  var links = this.links;
                  var template = html `<p>${text}</p>`
                  var templateDecorated = html``

                  // Decorate Links using template
                  // TODO : rework with several links
                  var linkLabel = links[0].label;
                  var href = links[0].href;
                  var elementsWithoutLinks = text.split(linkLabel)
                  // Insert between each element except the last the separator
                  var elements = [];
                  for(var i=0; i<elementsWithoutLinks.length-1; i++){
                  elements.push(elementsWithoutLinks[i])
                  elements.push(linkLabel)
                  }
                  elements.push(elementsWithoutLinks[elementsWithoutLinks.length-1])
                  templateDecorated = html`<p>
                  ${
                      Object.keys(elements).map((element) => {
                      return html`${ elements[element] == linkLabel ?
                          html `<a href="${href}">${elements[element]}</a>`:
                          html `${elements[element]}`
                      }`
                      })
                  }
                  </p>`

                  return html`${ links.length == 0 ? template : templateDecorated }`;
              })
          }
        </article>
      </section>
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      contents : { type: Object },
      links: { type: Object },
      imageSet: { type: Object }
    }
  }

  constructor() {
    super();
    this.title = "Title";
    this.contents = [
      {
        "text": "Text to display."
      }
    ];
    this.links = [
      {
          "label": "display",
          "href": "/"
      }
    ]
  }
}

window.customElements.define('hero-banner', HeroBanner);
