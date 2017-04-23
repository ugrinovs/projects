import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer/rootReducer';
import App from './App';
import Series from './series/Series';
import Show from './series/Show';
import './index.css';


const composeEnhancers = 
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
  || compose;

const middleWare = applyMiddleware(thunk);
const store = createStore(
  rootReducer,
  composeEnhancers(middleWare)
);

ReactDOM.render(
  <Provider store={store} >
    <Router history={browserHistory} >  
      <Route path="/" component={App}>
        <IndexRedirect to="series" />

        <Route path="series" component={Series} />
        <Route path="series/:id" component={Show} />
        
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
