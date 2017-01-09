import React, { Component, PropTypes } from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/github';

export default class ScriptForm extends Component {
  constructor() {
    super();
    this.state = { script: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ script: value });
  }

  render() {
    return (
      <AceEditor
        mode="javascript"
        theme="github"
        width="100%"
        onChange={this.handleChange}
        name={this.props.id}
        value={this.state.script}
      />
    );
  }
}

ScriptForm.propTypes = {
  id: PropTypes.string.isRequired,
};
