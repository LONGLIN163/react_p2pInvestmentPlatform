import React from 'react';
import { render } from 'react-dom';
import { combineReducers , createStore } from 'redux';
import { Provider } from 'react-redux';
import { Route , Link , HashRouter as Router , browserHistory } from 'react-router-dom'
import { routerReducer , syncHistoryWithStore } from 'react-router-redux';
//import createHistory from 'history/createHashHistory'
import {createHashHistory} from 'history'
import reducer from './reducers/index.js';
import App from './components/App.js';

const store = createStore(
  combineReducers({
    reducer,
    routing: routerReducer
  })
);

render(
	<Provider store={store} history={createHashHistory()}>
	  <Router hashType="hashbang" >
	  	<App></App>
	  </Router>
	</Provider>
  ,
  document.getElementById("container")
);
