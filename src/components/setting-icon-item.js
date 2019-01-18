import { LitElement, html } from 'lit-element'; 
import '@polymer/paper-item/paper-item.js';

// Create your custom component
class SettingItem extends LitElement {
  // Declare properties
  static get properties() {
    return {
      name: { type: String }
    };
  }
  // Initialize properties
  constructor() {
    super();
    this.label = 'label_to_define';
  }
  // Define a template
  render() {
    return html`
        <custom-style>
            <style is="custom-style">
            :host{
                outline: none;
            }
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

            paper-item:hover {
                background: rgb(225, 245, 250);
            }
            
            paper-item:active {
                background: rgb(195, 230, 250);
            }

            @media screen and (max-width: 600px) {
                paper-item:active, paper-item:hover:active {
                background: none;
                // background: green
                }
                
                paper-item:focus, paper-item:hover:focus {
                background: rgb(195, 230, 250);
                // background: orange
                }

                paper-item:hover {
                background: none;
                // background: red;
                }
            }
            </style>
        </custom-style>
        <paper-item>${this.label}</paper-item>`;
  }
}
// Register the element with the browser
customElements.define('setting-item', SettingItem);