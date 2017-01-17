import React from 'react';
import { branch } from 'baobab-react/higher-order';
import util from 'util';
import {
  addScript,
  changeScript,
  changeScriptDomains,
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
    {scripts.map(({ id, type, value }) => (
      <Script
        key={id}
        id={id}
        type={type}
        value={value}
        onChange={v => dispatch(changeScript, id, v)}
        onChangeDomain={ds => dispatch(changeScriptDomains, id, ds)}
        onDelete={() => dispatch(deleteScript, id)}
      />
    ))}
    <Buttons
      onAddCodeScript={() => dispatch(addScript, 'code')}
      onChangeDomain={ds => dispatch(changeScriptDomains, id, ds)}
      onAddUrlScript={() => dispatch(addScript, 'url')}
    />
  </div>
);

export default branch({
  active: ['active'],
  scripts: ['scripts'],
}, App);
