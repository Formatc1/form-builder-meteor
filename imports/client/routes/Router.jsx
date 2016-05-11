import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import { Meteor } from 'meteor/meteor';

import configureStore from '/imports/client/store/configureStore';

import AppContainer from '/imports/client/components/AppContainer';
import Home from '/imports/client/components/Home';
import EditForm from '/imports/client/components/EditForm';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

const requireAuth = (nextState, replace) => {
  if (!Meteor.user()) {
    replace({
      pathname: '/',
      state: {nextPathname: nextState.location.pathname}
    });
  }
};

const MainRouter = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path='/' component={AppContainer}>
          <IndexRoute component={Home} />
          <Route path='view/:formId' component={Home} />
          <Route path='create' component={EditForm} onEnter={requireAuth} />
        </Route>
      </Router>
    </Provider>
  );
};

export default MainRouter;
