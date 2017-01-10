import React, { Component, PropTypes } from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';
import styles from './index.css';

import 'brace/mode/javascript';
import 'brace/theme/github';

export default class ScriptForm extends Component {
  constructor({ code }) {
    super();
    this.state = { code: code };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ code: value });
  }

  render() {
    return (
      <AceEditor
        mode="javascript"
        theme="github"
        className={styles.box}
        fontSize={24}
        width="100%"
        showPrintMargin={false}
        onChange={this.handleChange}
        name={this.props.id}
        value={this.state.code}
      />
    );
  }
}

ScriptForm.propTypes = {
  id: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
};
