export const UPDATE_PAGE = 'UPDATE_PAGE';
export const UPDATE_OFFLINE = 'UPDATE_OFFLINE';
export const UPDATE_DRAWER_STATE = 'UPDATE_DRAWER_STATE';
export const OPEN_SNACKBAR = 'OPEN_SNACKBAR';
export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR';
export const REGISTER_SERVICE_WORKER = 'REGISTER_SERVICE_WORKER';
export const PAGE_INCREMENT = 'PAGE_INCREMENT';
export const PROMPT_APP_INSTALL_BANNER = 'PROMPT_APP_INSTALL_BANNER';
export const UPDATE_APP_INSTALL = 'UPDATE_APP_INSTALL';
export const ADD_PAGE_ANIMATION = 'ADD_PAGE_ANIMATION';


export const navigate = (path) => (dispatch, getState) => {
  // Add Page Navigation after the first navigation
  dispatch(addPageAnimation());

  // Extract the page name from path.
  const page = path === '/' ? 'home' : path.slice(1);

  // Any other info you might want to extract from the path (like page type),
  // you can do here
  dispatch(loadPage(page));

  // Close the drawer - in case the *path* change came from a link in the drawer.
  dispatch(updateDrawerState(false));

  // Increment page
  dispatch(pageIncrement());
};

const loadPage = (page) => (dispatch) => {
  switch(page) {
    case 'home':
      import('../components/my-home.js').then((module) => {
        // Put code in here that you want to run every time when
        // navigating to view1 after my-view1.js is loaded.
      });
      break;
    case 'settings':
      import('../components/my-settings.js').then((module) => {
      });
      break;
    case 'settings/app-install':
      page = "app-install";
      import('../components/my-app-install.js').then((module) => {
      });
      break;
    case 'settings/app-install/help-a2hs-android-windows':
      page = "staging";
      import('../components/my-staging.js').then((module) => {
      });
      break;
    case 'settings/app-install/help-a2hs-ios':
      page = "staging";
      import('../components/my-staging.js').then((module) => {
      });
      break;
    case 'settings/load-screens':
      page = "load-screens";
      import('../components/my-load-screens.js').then((module) => {
      });
      break;
    case 'counter':
      import('../components/my-counter.js');
      break;
    case 'shopping':
      import('../components/my-shopping.js');
      break;
    default:
      page = 'view404';
      import('../components/my-view404.js');
  }

  dispatch(updatePage(page));
};

const updatePage = (page) => {
  return {
    type: UPDATE_PAGE,
    page
  };
};

let snackbarTimer;

export const showSnackbar = () => (dispatch) => {
  dispatch({
    type: OPEN_SNACKBAR
  });
  window.clearTimeout(snackbarTimer);
  snackbarTimer = window.setTimeout(() =>
    dispatch({ type: CLOSE_SNACKBAR }), 3000);
};

export const updateOffline = (offline) => (dispatch, getState) => {
  // Show the snackbar only if offline status changes.
  if (offline !== getState().app.offline) {
    dispatch(showSnackbar());
  }
  dispatch({
    type: UPDATE_OFFLINE,
    offline
  });
};

export const updateDrawerState = (opened) => {
  return {
    type: UPDATE_DRAWER_STATE,
    opened
  };
};

export const registerServiceWorker = () => (dispatch, getState) => {
  if(!getState().app.serviceWorkerRegistered){
    navigator.serviceWorker.getRegistrations().then(registrations => {
      if(registrations.length == 0){
        var event = new CustomEvent('serviceWorkerToRegister');
        window.dispatchEvent(event);
      }else if(!/service-worker\.js/.test(registrations[0].active.scriptURL)){
        var event = new CustomEvent('serviceWorkerToRegister');
        window.dispatchEvent(event);
      }
      dispatch({ type: REGISTER_SERVICE_WORKER })
    });
  }
};

export const pageIncrement = () => (dispatch) => {
  dispatch({ type: PAGE_INCREMENT })
};

export const promptAppInstallBanner = () => (dispatch) => {
  dispatch({ type: PROMPT_APP_INSTALL_BANNER })
};

export const updateAppInstallStatus = (status) => (dispatch) => {
  dispatch({
    type: UPDATE_APP_INSTALL,
    status
  })
};

export const addPageAnimation = () => (dispatch) => {
  dispatch({ type: ADD_PAGE_ANIMATION })
};