import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
// import thunk from 'redux-thunk';
import { routerReducer } from 'react-router-redux';

import user from '/imports/client/reducers/user';

export default function configureStore(initialState) {
  const enhancer = compose(
    window.devToolsExtension ? window.devToolsExtension() : undefined
  );

  return createStore(combineReducers({
    routing: routerReducer,
    user
  }), initialState, enhancer);
}
