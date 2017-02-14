import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'; // we need this for react-router
// Import all my reducer path
/*
  Reducers

  Reducers match up the dispatched (fired) action with a function that should be called.

  It takes in a copy of state, modifies it, and returns the new state
  When state gets large, it makes sense to have multiple reducers that only deal with a piece of the state

*/


const rootReducer = combineReducers({
// This is where all reducer will be
// Combine all our reducers togeher

 routing: routerReducer,
});

export default rootReducer;
