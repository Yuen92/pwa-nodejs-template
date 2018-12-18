/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import {
  UPDATE_PAGE,
  UPDATE_OFFLINE,
  OPEN_SNACKBAR,
  CLOSE_SNACKBAR,
  UPDATE_DRAWER_STATE,
  REGISTER_SERVICE_WORKER,
  PAGE_INCREMENT,
  PROMPT_APP_INSTALL_BANNER,
  UPDATE_APP_INSTALL,
  ADD_PAGE_ANIMATION
} from '../actions/app.js';

const INITIAL_STATE = {
  page: '',
  offline: false,
  drawerOpened: false,
  snackbarOpened: false,
  serviceWorkerRegistered: false,
  pageCounter: 0,
  promptAppInstallBanner: false,
  appInstallAvailable: false,
  pageAnimationAdded: false
};

const app = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_PAGE:
      return {
        ...state,
        page: action.page
      };
    case UPDATE_OFFLINE:
      return {
        ...state,
        offline: action.offline
      };
    case UPDATE_DRAWER_STATE:
      return {
        ...state,
        drawerOpened: action.opened
      };
    case OPEN_SNACKBAR:
      return {
        ...state,
        snackbarOpened: true
      };
    case CLOSE_SNACKBAR:
      return {
        ...state,
        snackbarOpened: false
      };
    case REGISTER_SERVICE_WORKER:
      return {
        ...state,
        serviceWorkerRegistered: true
      };
    case PAGE_INCREMENT:
      return {
        ...state,
        pageCounter: state.pageCounter + 1
      };
    case PROMPT_APP_INSTALL_BANNER:
      console.log("PROMPT_APP_INSTALL_BANNER")
      var result = false;
      if(deferredPrompt){
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice
          .then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
              console.log('User accepted the A2HS prompt');
            } else {
              console.log('User dismissed the A2HS prompt');
            }
            deferredPrompt = null;
          });
          result = true;
      }else{
        console.log("PROMPT_APP_INSTALL_BANNER failed : deferredPrompt is undefined")
        result = false;
      }
      return {
        ...state,
        promptAppInstallBanner: result
      };
    case UPDATE_APP_INSTALL:
      return {
        ...state,
        appInstallAvailable: action.status
      };
    case ADD_PAGE_ANIMATION:
      var result = false
      if(!state.pageAnimationAdded){
        if(state.pageCounter > 0){
          var pages = document.querySelector("my-app").shadowRoot.querySelectorAll(".page")
          pages.forEach(function(value){
            value.classList.add("repeat-view");
          })
          result = true;
        }
      } else{
        result=true
      }
      return {
        ...state,
        pageAnimationAdded: result
      };
    default:
      return state;
  }
};

export default app;
