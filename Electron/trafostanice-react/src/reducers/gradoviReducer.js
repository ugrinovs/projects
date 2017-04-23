import { FETCH_ALL_GRADOVI } from '../actions/gradoviActions';

export default function gradoviReducer(state = [], action) {
  switch(action.type) {
    case FETCH_ALL_GRADOVI:
    return updateGradovi(state, action);
    default: return state;
  }
}

function updateGradovi(state, action) {
  return action.gradovi;
}
