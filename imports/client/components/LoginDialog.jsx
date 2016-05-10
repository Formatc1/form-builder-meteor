import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

import Dialog from 'react-toolbox/lib/dialog';
import Input from 'react-toolbox/lib/input';

import { toggleLoginDialog,
         toggleLoginRegister,
         changeFormValue,
         displayError,
         cleanForm } from '/imports/client/actions/login';

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

  handleSubmit() {
    const { username, password, passwordConfirm } = this.props.user.form;
    if(username == '') {
      return this.props.dispatch(displayError('username', 'Username should not be empty'));
    }
    if(password == '') {
      return this.props.dispatch(displayError('password', 'Password should not be empty'));
    }
    if(this.props.user.register) {
      if(password !== passwordConfirm) {
        return this.props.dispatch(displayError('password', 'Password does not match the confirm password'));
      }
      return Accounts.createUser({
        username,
        password
      }, (error) => {
        if (error) {
          this.props.dispatch(displayError('username', 'User with this username already exists'));
        } else {
          this.props.dispatch(cleanForm());
        }
      });
    }
    return Meteor.loginWithPassword(username, password, (error) => {
      if (error) {
        this.props.dispatch(displayError('username', 'Wrong username or password'));
        this.props.dispatch(displayError('password', 'Wrong username or password'));
      } else {
        this.props.dispatch(cleanForm());  
      }
    });
  }

  actions() {
    return [
      {label: 'Close', onClick: this.handleToggleLoginDialog.bind(this)},
      {
        label: this.props.user.register ? 'Already have account' : 'Create new account',
        onClick: this.handleToggleLoginRegister.bind(this)
      },
      {
        label: this.props.user.register ? 'Register' : 'Login',
        onClick: this.handleSubmit.bind(this)
      }
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
          error={this.props.user.formErrors.username}
          value={this.props.user.form.username}
          onChange={this.handleChange.bind(this, 'username')} />
        <Input
          type='password'
          label='Password'
          name='Password'
          error={this.props.user.formErrors.password}
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
