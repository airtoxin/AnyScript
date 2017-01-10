import React, { Component, PropTypes } from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';
import { debounce } from 'lodash';
import styles from './index.css';

import 'brace/mode/javascript';
import 'brace/theme/github';

export default class ScriptForm extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.props.onChange(value);
  }

  render() {
    return (
      <div className={`${styles.flex} ${styles.container}`}>
        <AceEditor
          mode="javascript"
          theme="github"
          className={styles.box}
          fontSize={24}
          width="90%"
          showPrintMargin={false}
          onChange={debounce(this.handleChange, 2000)}
          name={this.props.id}
          value={this.props.code}
        />
      </div>
    );
  }
}

ScriptForm.propTypes = {
  id: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
