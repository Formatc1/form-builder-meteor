import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Link } from 'react-router';

import { Meteor } from 'meteor/meteor';

import { Layout, Panel, AppBar } from 'react-toolbox';
import Navigation from 'react-toolbox/lib/navigation';
import linkStyles from 'react-toolbox/lib/link/style';

import LoginDialog from '/imports/client/components/LoginDialog';
import LoginButton from '/imports/client/components/LoginButton';

import { toggleLoginDialog } from '/imports/client/actions/login';

import styles from './AppContainerStyles';

class AppContainer extends React.Component {
  handleToggleLoginDialog() {
    this.props.dispatch(toggleLoginDialog());
  }

  handleLogout() {
    Meteor.logout(() => {
      this.props.dispatch(push('/'));
    });
  }

  render () {
    return (
      <div>
        <Layout>
          <Panel>
            <AppBar>
              <Link to='/' className={linkStyles.root}>Home</Link>
              <Navigation className={styles.navigation}>
                {this.props.user.user && `Logged as: ${this.props.user.user.username}`}
                <LoginButton
                  user={Meteor.user()}
                  handleLogin={this.handleToggleLoginDialog.bind(this)}
                  handleLogout={this.handleLogout.bind(this)} />
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
