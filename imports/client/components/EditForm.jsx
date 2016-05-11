import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

class EditForm extends React.Component {
  render () {
    return <div>EDIT</div>;
  }
}

EditForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  inputs: PropTypes.array.isRequired,
  edit: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    inputs: state.form,
    edit: state.edit
  };
};

export default connect(mapStateToProps)(EditForm);
