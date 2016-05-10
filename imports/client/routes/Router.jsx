import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from '/imports/client/store/configureStore';

import Home from '/imports/client/components/Home';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

const AppContainer = (props) => {
  return (
    <div>
      {props.children}
    </div>
  );
};

const MainRouter = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path='/' component={AppContainer}>
          <IndexRoute component={Home} />
        </Route>
      </Router>
    </Provider>
  );
};

export default MainRouter;
