import React, { Component, PropTypes } from 'react';
import { Button, Input, Label } from 're-bulma';
import FaCog from 'react-icons/lib/fa/cog';
import brace from 'brace';
import AceEditor from 'react-ace';
import { debounce } from 'lodash';
import common from '../common.css';
import styles from './index.css';

import 'brace/mode/javascript';
import 'brace/theme/github';

export default class ScriptForm extends Component {
  constructor() {
    super();

    this.state = { focused: false };
  }

  render() {
    const { id, code, onChange, onDelete } = this.props;
    return (
      <div className={`${common.flexCol} ${common.boxContainer} ${common.script}`}>
        <AceEditor
          name={id}
          onFocus={() => this.setState({ focused: true })}
          onBlur={() => this.setState({ focused: false })}
          onChange={onChange}
          value={code}
          className={`${this.state.focused ? styles.box : styles.boxOut} ${common.box}`}
          mode="javascript"
          theme="github"
          fontSize={16}
          width=""
          showPrintMargin={false}
        />
        <div className={common.flexRow}>
          <Input className={`${common.box} ${common.flex1}`} placeholder="domain" />
          <Button className={`${common.box} ${common.flex1}`} color="isDanger" onClick={() => onDelete()}>Delete</Button>
        </div>
      </div>
    );
  }
}
