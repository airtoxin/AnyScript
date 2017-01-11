import React, { Component, PropTypes } from 'react';
import { debounce } from 'lodash';
import { Input, Button } from 're-bulma';

export default class UrlForm extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.props.onChange(value);
  }

  render() {
    return (
      <div>
        <Input onChange={debounce(this.handleChange, 1000)}/>
        <Button color="isDanger" onClick={() => this.props.onDelete(this.props.id)}>Delete</Button>
      </div>
    );
  }
}
