import React, { Component, PropTypes } from 'react';
import { Input as RebulmaInput } from 're-bulma';

export default class Input extends Component {
  constructor(props) {
    super();
    this.state = { value: props.value };

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const value = nextProps.value;
    if (nextProps.value !== this.state.value)
      this.setState({ value }, () => this.props.onChange(value));
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({ value }, () => this.props.onChange(value));
  }

  render() {
    return (
      <RebulmaInput
        {...this.props}
        value={this.state.value}
        onChange={this.handleChange}
      />
    );
  }
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
