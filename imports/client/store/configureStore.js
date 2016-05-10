
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
// import thunk from 'redux-thunk';
import { routerReducer } from 'react-router-redux';

// import form from './reducers/form';
// import edit from './reducers/edit';

export default function configureStore(initialState) {
  const enhancer = compose(
    window.devToolsExtension ? window.devToolsExtension() : undefined
  );

  return createStore(combineReducers({
    routing: routerReducer
  }), initialState, enhancer);
}
