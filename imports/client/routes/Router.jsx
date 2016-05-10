import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from '/imports/client/store/configureStore';

import AppContainer from '/imports/client/components/AppContainer';
import Home from '/imports/client/components/Home';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

const requireAuth = (nextState, replace) => {
  // if not logged
  replace({
    pathname: '/',
    state: { nextPathname: nextState.location.pathname}
  });
} ;

const MainRouter = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path='/' component={AppContainer}>
          <IndexRoute component={Home} />
          <Route path='view' component={Home} onEnter={requireAuth} />
        </Route>
      </Router>
    </Provider>
  );
};

export default MainRouter;
