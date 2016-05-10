import React from 'react';

import { Layout, Panel, AppBar } from 'react-toolbox';
import Navigation from 'react-toolbox/lib/navigation';
import Link from 'react-toolbox/lib/link';

import styles from './AppContainerStyles';

class AppContainer extends React.Component {
  toggleLoginDialog() {
    return false;
  }

  render () {
    return (
      <Layout>
        <Panel>
          <AppBar>
            <Navigation className={styles.navigation}>
              {/* TODO check if user is logged */}
              <Link
                className={styles.white}
                onClick={this.toggleLoginDialog.bind(this)}>
                Login
              </Link>
            </Navigation>
          </AppBar>
          {this.props.children}
        </Panel>
      </Layout>
    );
  }
}

// return (
//   <div>
//     {this.props.children}
//   </div>

export default AppContainer;
