import { FETCH_ALL_TRAFOSTANICE } from '../actions/trafostaniceActions';

export default function trafostaniceReducer(state = [], action) {
  switch(action.type) {
    case FETCH_ALL_TRAFOSTANICE:
    return updateTrafostanice(state, action);
    default: return state;
  }
}

function updateTrafostanice(state, action) {
  return action.trafostanice;
}
