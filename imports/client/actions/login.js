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

export function displayError(name, value) {
  return {
    type: 'DISPLAY_ERROR_LOGIN_FROM',
    name,
    value
  };
}

export function cleanForm() {
  return {
    type: 'CLEAN_FORM'
  };
}
