import _ from 'lodash';
const electron = window.require('electron');
const fs = electron.remote.require('fs');
const ipcRenderer  = electron.ipcRenderer;
export const FETCH_ALL_TRAFOSTANICE = 'FETCH_ALL_TRAFOSTANICE';
export function fetchAllTrafostanice(volt, grad_id) {
  return dispatch => {
    ipcRenderer.send('fetchAllTrafostanice', { volt, grad_id });
    ipcRenderer.on('allTrafostaniceFetched', function(event, data) {
      dispatch(updateTrafostanice(data))
    })
  }

}

function updateTrafostanice(trafostanice) {
  return {
    type: FETCH_ALL_TRAFOSTANICE,
    trafostanice
  }
}
