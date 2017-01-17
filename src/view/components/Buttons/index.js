import React from 'react';
import { Button } from 're-bulma';
import styles from './index.css';
import common from '../common.css';

export default ({ onAddCodeScript, onAddUrlScript }) => (
  <div className={`${common.flexRow}`}>
    <Button
      className={`${styles.button} ${common.box}`}
      color="isPrimary"
      onClick={onAddCodeScript}
    >Add code script</Button>
    <Button
      className={`${styles.button} ${common.box}`}
      color="isPrimary"
      onClick={onAddUrlScript}
    >Add url script</Button>
  </div>
);
