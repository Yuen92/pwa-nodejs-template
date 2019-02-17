import { hostname } from "/server/dev_config/front.js";
export const LOAD_SETTINGS = 'LOAD_SETTINGS';

export const loadSettings = () => async (dispatch, getState) => {
  dispatch(await fetchDatas('settings'));

  var state = getState();
  //dispatch(updateSettings(state.settings));
}

async function fetchDatas(name) {
  // Import static datas
  // var data = settings

  // Request to server if dynamic datas
  var resp = await fetch(hostname +`/${name}/datas`);
  var data = await resp.json();
  return {
    type: LOAD_SETTINGS,
    settings: data
  };
}