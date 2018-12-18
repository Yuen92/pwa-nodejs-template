export const LOAD_SETTINGS = 'LOAD_SETTINGS';
export const UPDATE_SETTINGS = 'UPDATE_SETTINGS';

export const loadSettings = () => async (dispatch, getState) => {
  dispatch(await loadFile('settings'));

  var state = getState();
  dispatch(updateSettings(state.settings));
}

async function loadFile(name) {
  var resp = await fetch(`/src/data/${name}.json`);
  var data = await resp.json();
  return {
    type: LOAD_SETTINGS,
    settings: data
  };
}

export const updateSettings = (settings) => (dispatch) => {
  dispatch({
    type: UPDATE_SETTINGS,
    settings: settings
  })
};