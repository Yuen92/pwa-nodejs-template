/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from 'lit-element';

export const PaperItemStyles = html`
<custom-style>
  <style is="custom-style">
    paper-item {
      cursor: pointer;
      color: rgb(0, 155, 230);
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
      }
      
      paper-item:focus, paper-item:hover:focus {
      background: rgb(195, 230, 250);
      }

      paper-item:hover {
      background: none;
      }
    }
  </style>
</custom-style>
`;
