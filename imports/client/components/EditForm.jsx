import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { Card, CardTitle, CardText } from 'react-toolbox/lib/card';
import { Button } from 'react-toolbox/lib/button';
import Dialog from 'react-toolbox/lib/dialog';
import Dropdown from 'react-toolbox/lib/dropdown';

import styles from './EditFormStyles';

class EditForm extends React.Component {
  render () {
    return (
      <div>
        <div className={styles.flexContainer}>
          <Card className={styles.card}>
            <CardTitle title='Edit'/>
            <CardText>
              {this.props.edit.inputIndex !== undefined
                ? 'Editing selected input'
                : 'Select input to edit'}
            </CardText>
          </Card>
          <Card className={styles.card}>
            <CardTitle title='Preview'/>
            <CardText>
              {this.props.inputs.map((input, i) =>
                {/*<PreviewInput
                  key={i}
                  index={i}
                  input={input}
                  editing={this.props.edit.inputIndex}
                  handleClick={this.handleClickOnInput.bind(this, i)} />*/}
              )}
            </CardText>
          </Card>
        </div>
        <Button
          className={this.props.edit.activeAddingDialog ? styles.fab__active : styles.fab}
          icon='add'
          onClick={this.handleToggleAddingDialog.bind(this)}
          floating
          accent />
        <Dialog
          className={styles.dialog}
          actions={this.getActions()}
          active={this.props.edit.activeAddingDialog || false}
          onEscKeyDown={this.handleToggleAddingDialog.bind(this)}
          onOverlayClick={this.handleToggleAddingDialog.bind(this)}
          title='Add new input'>
        <Dropdown
          label='Select input type'
          value={this.props.edit.inputType}
          source={this.inputTypes()}
          onChange={this.handleChangeType.bind(this)} />
        </Dialog>
      </div>
    );
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
