export function toggleLoginDialog() {
  return {
    type: 'TOGGLE_LOGIN_DIALOG'
  };
}

export function toggleLoginRegister() {
  return {
    type: 'TOGGLE_LOGIN_REGISTER'
  };
}

export function changeFormValue(name, value) {
  return {
    type: 'CHANGE_LOGIN_FORM_VALUE',
    name,
    value
  };
}
