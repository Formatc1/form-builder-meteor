import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { Card, CardTitle, CardText } from 'react-toolbox/lib/card';
import Checkbox from 'react-toolbox/lib/checkbox';
import DatePicker from 'react-toolbox/lib/date_picker';
import Dropdown from 'react-toolbox/lib/dropdown';
import Input from 'react-toolbox/lib/input';
import { RadioGroup, RadioButton } from 'react-toolbox/lib/radio';
import Slider from 'react-toolbox/lib/slider';
import Switch from 'react-toolbox/lib/switch';
import TimePicker from 'react-toolbox/lib/time_picker';

// import { fetchInputs, changeValue } from '../../actions';

import styles from './ViewFormStyles';

class ViewFormContainer extends React.Component {
  handleChange(index, value) {
    // this.props.dispatch(changeValue(index, 'value', value));
  }

  createInput(input, i) {
    switch (input.type) {
      case 'checkbox':
        return <Checkbox
                  key={i}
                  checked={input.value}
                  label={input.label}
                  onChange={this.handleChange.bind(this, i)} />;
      case 'date-picker':
        return <DatePicker
                  key={i}
                  label={input.label}
                  value={new Date(input.value)}
                  onChange={this.handleChange.bind(this, i)} />;
      case 'dropdown':
        return <Dropdown
                  key={i}
                  label={input.label}
                  value={input.value}
                  source={input.options.map((option, i) => {
                    return {value: i, label: option};
                  })}
                  onChange={this.handleChange.bind(this, i)} />;
      case 'input':
        return <Input
                  key={i}
                  type='text'
                  hint={input.hint}
                  icon={input.icon}
                  label={input.label}
                  maxLength={input.maxLength}
                  required={input.required}
                  value={input.value}
                  onChange={this.handleChange.bind(this, i)} />;
      case 'radio':
        return <RadioGroup
                  className={styles.radioGroup}
                  key={i}
                  name={input.name}
                  value={input.value}
                  onChange={this.handleChange.bind(this, i)}>
                  {input.options.map((option, i) =>
                    <RadioButton
                       key={i}
                       label={option}
                       value={i} />
                  )}
        </RadioGroup>;
      case 'slider':
        return  <div key={i}>
          <p>{input.label}</p>
          <Slider
             min={input.min}
             max={input.max}
             step={input.step}
             value={input.value}
             onChange={this.handleChange.bind(this, i)}
             pinned
             editable />
        </div>;
      case 'switch':
        return <Switch
                  key={i}
                  name={input.name}
                  label={input.label}
                  checked={input.value}
                  onChange={this.handleChange.bind(this, i)} />;
      case 'time-picker':
        return <TimePicker
                  key={i}
                  value={new Date(input.value)}
                  onChange={this.handleChange.bind(this, i)} />;
      default:
        return undefined;
    }
  }

  componentDidMount() {
    if (this.props.inputs.length < 1) {
      // this.props.dispatch(fetchInputs());
    }
  }

  render() {

    return (
      <Card className={this.props.styles}>
        <CardTitle title='Form'/>
        <CardText>
          {this.props.inputs.map(this.createInput.bind(this))}
        </CardText>
      </Card>
    );
  }
}

ViewFormContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  inputs: PropTypes.array.isRequired,
  styles: PropTypes.string
};

ViewFormContainer.defaultProps = {
  styles: styles.card
};

const mapStateToProps = (state) => {
  return {
    inputs: state.form.schema || []
  };
};

export default connect(mapStateToProps)(ViewFormContainer);
