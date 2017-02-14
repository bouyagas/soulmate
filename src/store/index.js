import { createStore } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from '../reducers/index.js'
/*
  Store

  Redux apps have a single store which takes
  1. All Reducers which we combined into `rootReducer`
  2. An optional starting state - similar to React's getInitialState
*/

const store = createStore (
  rootReducer,
  window.devToolsExtension && window.devToolsExtension()
)


// we export history because we need it in `index.js` to feed into <Router>
export const history = syncHistoryWithStore (
  browserHistory,
  store
)


/*
  Enable Hot Reloading for the reducers
  We re-require() the reducers whenever any new code has been written.
  Webpack will handle the rest
*/

if(module.hot) {
  module.hot.accept('../reducers/', () => {
    const nextRootReducer = require('../reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store
