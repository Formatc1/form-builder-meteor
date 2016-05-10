import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { Meteor } from 'meteor/meteor';

import { Layout, Panel, AppBar } from 'react-toolbox';
import Navigation from 'react-toolbox/lib/navigation';
import Link from 'react-toolbox/lib/link';

import LoginDialog from '/imports/client/components/LoginDialog';

import { toggleLoginDialog } from '/imports/client/actions/login';

import styles from './AppContainerStyles';

class AppContainer extends React.Component {
  handleToggleLoginDialog() {
    this.props.dispatch(toggleLoginDialog());
  }

  handleLogout() {
    Meteor.logout();
  }

  render () {
    return (
      <div>
        <Layout>
          <Panel>
            <AppBar>
              <Navigation className={styles.navigation}>
                {/* TODO check if user is logged */}
                {
                  Meteor.user() ?
                  <Link
                    className={styles.white}
                    onClick={this.handleLogout} >
                    Logout
                  </Link> :
                  <Link
                    className={styles.white}
                    onClick={this.handleToggleLoginDialog.bind(this)}>
                    Login
                  </Link>
                }
              </Navigation>
            </AppBar>
            {this.props.children}
          </Panel>
        </Layout>
        <LoginDialog />
      </div>
    );
  }
}

AppContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(AppContainer);
