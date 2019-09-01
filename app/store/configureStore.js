import { createStore, applyMiddleware } from 'redux';

import rootReducer from './reducers';

export default function configureStore(initialState = {}) {
  const middlewares = [];

  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares),
  );
}
