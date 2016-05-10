import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';

import MainRouter from '/imports/client/routes/Router';

Meteor.startup(() => {
  render(<MainRouter />, document.getElementById('root'));
});
