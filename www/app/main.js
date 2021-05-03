import React from 'react';
import { render } from 'react-dom';
import { combineReducers , applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { Route , Link , HashRouter as Router , browserHistory } from 'react-router-dom'
import { routerReducer , syncHistoryWithStore } from 'react-router-redux';
//import createHistory from 'history/createHashHistory'
import {createHashHistory} from 'history'
//import {createHistory} from 'history'
import investReducer from './reducers/investReducer.js';
import App from './components/App.js';

import thunk from "redux-thunk";
import { createLogger } from 'redux-logger'




const store = createStore(
  combineReducers({
    investReducer,
    routing: routerReducer
  }),
  applyMiddleware(createLogger(),thunk)
);

render(
	//  <Provider store={store} history={createHistory()}>
	<Provider store={store} history={createHashHistory()}>
	  <Router>
	  	<App></App>
	  </Router>
	</Provider>
  ,
  document.getElementById("container")
);
