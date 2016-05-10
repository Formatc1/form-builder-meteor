import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Dialog from 'react-toolbox/lib/dialog';
import Input from 'react-toolbox/lib/input';

import { toggleLoginDialog,
         toggleLoginRegister,
         changeFormValue } from '/imports/client/actions/login';

class LoginDialog extends React.Component {
  handleToggleLoginDialog() {
    this.props.dispatch(toggleLoginDialog());
  }

  handleToggleLoginRegister() {
    this.props.dispatch(toggleLoginRegister());
  }

  handleChange(name, value) {
    this.props.dispatch(changeFormValue(name, value));
  }

  actions() {
    return [
      {label: 'Close', onClick: this.handleToggleLoginDialog.bind(this)},
      {label: 'Register', onClick: this.handleToggleLoginRegister.bind(this)},
      {label: 'Login', onClick: this.handleToggleLoginDialog.bind(this)}
    ];
  }

  render() {
    return (
      <Dialog
        actions={this.actions()}
        active={this.props.user.showLoginDialog || false}
        onEscKeyDown={this.handleToggleLoginDialog.bind(this)}
        onOverlayClick={this.handleToggleLoginDialog.bind(this)}
        title={this.props.user.register ? 'Create new account' : 'Login'}>
        <Input
          type='text'
          label='Username'
          name='username'
          value={this.props.user.form.username}
          onChange={this.handleChange.bind(this, 'username')} />
        <Input
          type='password'
          label='Password'
          name='Password'
          value={this.props.user.form.password}
          onChange={this.handleChange.bind(this, 'password')} />
        {this.props.user.register ?
          <Input
            type='password'
            label='Confirm password'
            name='passwordConfirm'
            value={this.props.user.form.passwordConfirm}
            onChange={this.handleChange.bind(this, 'passwordConfirm')} /> :
          undefined}
      </Dialog>
    );
  }
}

LoginDialog.propTypes = {
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(LoginDialog);
