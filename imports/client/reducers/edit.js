const reducer = (state={}, action) => {
  switch (action.type) {
    case 'ADD_INPUT':
    case 'TOOGLE_ADDING_DIALOG':
      return Object.assign({}, state, {
        activeAddingDialog: !state.activeAddingDialog,
        inputType: state.inputType || 'input'
      });

    case 'OPEN_INPUT_TO_EDIT':
      return Object.assign({}, state, {
        inputIndex: action.index
      });

    case 'REMOVE_INPUT':
    case 'DONE_EDITING_INPUT':
      return Object.assign({}, state, {
        inputIndex: undefined
      });

    case 'CHANGE_TYPE':
      return Object.assign({}, state, {
        inputType: action.value
      });

    default:
      return state;
  }
};

  export default reducer;
