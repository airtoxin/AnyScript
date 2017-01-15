import React from 'react';
import util from 'util';
import styles from './index.css';

export default (props) => process.env.NODE_ENV === 'production' ? null : (
  <pre className={styles.debug}>
    {util.inspect(props, { depth: null })}
  </pre>
);
