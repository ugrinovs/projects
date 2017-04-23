import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory, Router, Route, IndexRedirect } from 'react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './store/store';
import App from './App';
import Gradovi from './components/gradovi/Gradovi';
import Trafostanice from './components/trafostanice/Trafostanice';
import './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));
ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route component={App}>
        <IndexRedirect to="/"/>
        <Route path="/" component={Gradovi} />
        <Route path="/trafostanice" component={Trafostanice} >
          <Route path="/trafostanice/:volt" />
          <Route path="/trafostanice/:volt/:id" />
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
