import { combineReducers } from 'redux';

import counter from './counter';

const createRootReducer = combineReducers({
  counter,
});

export default createRootReducer;
