import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
// import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerReducer, routerMiddleware } from 'react-router-redux';

import user from '/imports/client/reducers/user';
import home from '/imports/client/reducers/home';
import edit from '/imports/client/reducers/edit';
import form from '/imports/client/reducers/form';

export default function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(routerMiddleware(browserHistory)),
    window.devToolsExtension ? window.devToolsExtension() : undefined
  );

  return createStore(combineReducers({
    routing: routerReducer,
    user,
    home,
    edit,
    form
  }), initialState, enhancer);
}
