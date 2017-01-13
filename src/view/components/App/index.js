import React from 'react';
import { branch } from 'baobab-react/higher-order';
import util from 'util';
import { Button, Group } from 're-bulma';
import {
  addScript,
  changeScriptCode,
  changeScriptUrl,
  deleteScript,
} from '../../actions';
import ScriptForm from '../ScriptForm';
import UrlForm from '../UrlForm';
import Debug from '../Debug';
import Notify from '../Notify';
import styles from './index.css';

let ref;
const App = ({ dispatch, active, scripts }) => (
  <div>
    <Notify />
    <Debug active={active} scripts={scripts} />
    {scripts.map(({ id, type, code, url }) => (
      type === 'code' ? (
        <ScriptForm
          key={id}
          id={id}
          code={code}
          onChange={code => dispatch(changeScriptCode, id, code)}
          onDelete={() => dispatch(deleteScript, id)}
        />
      ) : (
        <UrlForm
          key={id}
          url={url}
          onChange={url => dispatch(changeScriptUrl, id, url)}
          onDelete={() => dispatch(deleteScript, id)}
        />
      )
    ))}
    <Group>
      <Button
        className={styles.button}
        color="isPrimary"
        onClick={() => dispatch(addScript, 'code')}
      >Add code script</Button>
      <Button
        className={styles.button}
        color="isPrimary"
        onClick={() => dispatch(addScript, 'url')}
      >Add url script</Button>
    </Group>
  </div>
);

export default branch({
  active: ['active'],
  scripts: ['scripts'],
}, App);
