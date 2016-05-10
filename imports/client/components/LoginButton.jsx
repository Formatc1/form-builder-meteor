import React, { PropTypes } from 'react';

import Link from 'react-toolbox/lib/link';

import styles from './LoginButtonStyles';

const LoginButton = (props) => {
  if (props.user) {
    return (
      <Link
        className={styles.white}
        onClick={props.handleLogout} >
        Logout
      </Link>
    );
  }
  return (
    <Link
      className={styles.white}
      onClick={props.handleLogin}>
      Login
    </Link>
  );
};

LoginButton.propTypes = {
  user: PropTypes.object,
  handleLogin: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired
};

export default LoginButton;
