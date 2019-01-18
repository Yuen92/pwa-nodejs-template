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

export const PaperIconItemStyles = html`
<custom-style>
  <style is="custom-style">
    @-webkit-keyframes hoverFromNormal {
      from { box-shadow: 0 2px 5px 0 rgba(0,0,0,.26); }
        to { box-shadow: 0 5px 5px 0 rgba(0,0,0,.26); }
    }  
    @keyframes hoverFromNormal {
        from { box-shadow: 0 2px 5px 0 rgba(0,0,0,.26); }
          to { box-shadow: 0 5px 5px 0 rgba(0,0,0,.26); }
    }  
    @-webkit-keyframes normalFromHover {
      from { box-shadow: 0 5px 5px 0 rgba(0,0,0,.26); }
        to { box-shadow: 0 2px 5px 0 rgba(0,0,0,.26); }
    }  
    @keyframes normalFromHover {
        from { box-shadow: 0 5px 5px 0 rgba(0,0,0,.26); }
          to { box-shadow: 0 2px 5px 0 rgba(0,0,0,.26); }
    }  

    paper-icon-item {
      margin: 10px auto;
      cursor: pointer;
      color: var(--app-primary-color);
      --paper-item-focused: {
        background: var(--app-seventh-color);
      };
      --paper-item-selected: {
        /* background: rgb(225, 245, 250) */
      }
      --paper-item-focused-before: {
        background: none;
      }
      box-shadow: 0 2px 5px 0 rgba(0,0,0,.26);
      animation: normalFromHover 500ms;
    }

    paper-icon-item[disabled]{
      color: var(--app-fifth-color);
      background: var(--app-eighth-color)
    }

    paper-icon-item[disabled] > div {
      text-decoration: line-through;
    }

    paper-icon-item:hover {
      background: var(--app-sixth-color);
      box-shadow: 0px 5px 5px 0px rgba(0,0,0,.26);
      animation: hoverFromNormal 500ms;
    }

    paper-icon-item:active {
      background: var(--app-seventh-color);
    }

    @media screen and (max-width: 600px) {
      paper-icon-item:active, paper-icon-item:hover:active {
        background: none;
      }
      
      paper-icon-item:focus, paper-icon-item:hover:focus {
        background: var(--app-seventh-color);
      }

      paper-icon-item:hover {
        background: none;
      }
    }
  </style>
</custom-style>
`;
