import React, { Component, PropTypes } from 'react';
import { Button } from 're-bulma';
import brace from 'brace';
import AceEditor from 'react-ace';
import { debounce } from 'lodash';
import styles from './index.css';

import 'brace/mode/javascript';
import 'brace/theme/github';

const ScriptForm = ({ id, code, onChange, onDelete }) => (
  <div className={`${styles.flex} ${styles.container}`}>
    <AceEditor
      mode="javascript"
      theme="github"
      className={styles.box}
      fontSize={16}
      width="90%"
      showPrintMargin={false}
      onChange={onChange}
      name={id}
      value={code}
    />
    <Button color="isDanger" onClick={() => onDelete()}>Delete</Button>
  </div>
);

ScriptForm.propTypes = {
  id: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ScriptForm;
