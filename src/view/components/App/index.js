import React from 'react';
import { branch } from 'baobab-react/higher-order';
import util from 'util';
import {
  addScript,
  changeScript,
  onChangeUrlRegExp,
  deleteScript,
} from '../../actions';
import Script from '../Script';
import Debug from '../Debug';
import Notify from '../Notify';
import Buttons from '../Buttons';
import styles from './index.css';

let ref;
const App = ({ dispatch, active, scripts }) => (
  <div>
    <Notify />
    <Debug active={active} scripts={scripts} />
    {scripts.map(({ id, type, value, regexp }) => (
      <Script
        key={id}
        id={id}
        type={type}
        value={value}
        urlRegExp={regexp}
        onChange={v => dispatch(changeScript, id, v)}
        onChangeUrlRegExp={ds => dispatch(onChangeUrlRegExp, id, ds)}
        onDelete={() => dispatch(deleteScript, id)}
      />
    ))}
    <Buttons
      onAddCodeScript={() => dispatch(addScript, 'code')}
      onAddUrlScript={() => dispatch(addScript, 'url')}
    />
  </div>
);

export default branch({
  active: ['active'],
  scripts: ['scripts'],
}, App);
