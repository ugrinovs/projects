const electron = window.require('electron');
const fs = electron.remote.require('fs');
const ipcRenderer  = electron.ipcRenderer;
export const FETCH_ALL_GRADOVI = 'FETCH_ALL_GRADOVI';
export function fetchAllGradovi() {
  return dispatch => {
    ipcRenderer.send('fetchGradovi');
    ipcRenderer.on('allGradovi', function(event, data) {
      dispatch(updateGradovi(data));
    })
  }
}

export function addGrad(naziv) {
  return dispatch => {
    ipcRenderer.send('addGrad', naziv);
    dispatch(fetchAllGradovi());
  }
}
function updateGradovi(gradovi) {
  return {
    type: FETCH_ALL_GRADOVI,
    gradovi
  }
}
