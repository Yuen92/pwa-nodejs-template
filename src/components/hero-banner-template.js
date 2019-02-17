import { html } from 'lit-element';

// Static Datas
import { properties } from '../data/home.js';

export const HeroBannerTemplate = html`
    <h1>${properties.heroBannerSection.title}</h1>
    ${
        Object.keys(properties.heroBannerSection.contents).map((content) => {
            // For each paragraph in the Hero Banner Section
            const text = properties.heroBannerSection.contents[content].text;
            var links = properties.heroBannerSection.links;
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

            return html`${ links.length == 0 ?
            template :
            templateDecorated
            }`;
        })
    }
`