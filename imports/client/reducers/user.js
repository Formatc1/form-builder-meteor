import update from 'react-addons-update';

const initialState = {
  showLoginDialog: false,
  register: false,
  form: {
    username: '',
    password: '',
    passwordConfirm: ''
  }
};

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_LOGIN_DIALOG':
      return Object.assign({}, state, {
        showLoginDialog: !state.showLoginDialog,
        register: state.showLoginDialog ? state.register : false
      });

    case 'TOGGLE_LOGIN_REGISTER':
      return Object.assign({}, state, {
        register: !state.register
      });

    case 'CHANGE_LOGIN_FORM_VALUE':
      return update(state, {
        form: {
          [action.name]: {
            $set: action.value
          }
        }
      });

    default:
      return state;
  }
};

export default reducer;
