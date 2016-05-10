import update from 'react-addons-update';

const initialState = {
  showLoginDialog: false,
  register: false,
  form: {
    username: '',
    password: '',
    passwordConfirm: ''
  },
  formErrors: {
    username: '',
    password: ''
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

    case 'DISPLAY_ERROR_LOGIN_FROM':
      return update(state, {
        formErrors: {
          [action.name]: {
            $set: action.value
          }
        }
      });

    case 'CLEAN_FORM':
      return initialState;

    default:
      return state;
  }
};

export default reducer;
