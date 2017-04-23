import { combineReducers } from 'redux';
import gradoviReducer from '../reducers/gradoviReducer';
import trafostaniceReducer from '../reducers/trafostaniceReducer';

const rootReducer = combineReducers({
  gradovi: gradoviReducer,
  trafostanice: trafostaniceReducer
})

export default rootReducer;
