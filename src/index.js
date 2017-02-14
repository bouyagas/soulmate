'use strict';

import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Router, Route } from 'react-router';
import Main from './Container/Main';
import store, { history } from './store/index';


const router = (
  <BrowserRouter>
      <Provider store={store}>
        <Router history={history}>
          <Route path='/' component={Main}>
          </Route>
        </Router>
      </Provider>
  </BrowserRouter>
)


ReactDOM.render((router), document.querySelector('#root-container'));
