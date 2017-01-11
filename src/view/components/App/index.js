import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import util from 'util';
import { Button, Group } from 're-bulma';
import {
  toggleActivation,
  activate,
  deactivate,
  addScript,
  deleteScript,
  saveScript
} from '../../actions';
import ScriptForm from '../ScriptForm';
import UrlForm from '../UrlForm';
import Debug from '../Debug';
import styles from './index.css';

const createNewScript = (type) => ({
  id: uuid(),
  type,
  code: '',
  url: '',
});

const App = ({ scripts, onClickAddScript, onClickAddUrl, onClickDeleteScript, onChangeScript }) => (
  <div>
    <Debug />
    {scripts.map(({ id, type, code, url }) => (
      type === 'code' ? (
        <ScriptForm
          key={id}
          id={id}
          code={code}
          onChange={code => onChangeScript({ id, code })}
          onDelete={onClickDeleteScript}
        />
      ) : (
        <UrlForm
          key={id}
          id={id}
          url={url}
          onChange={url => onChangeScript({ id, url })}
          onDelete={onClickDeleteScript}
        />
      )
    ))}
    <Group>
      <Button
        className={styles.button}
        color="isPrimary"
        onClick={onClickAddScript}
      >Add script</Button>
      <Button
        className={styles.button}
        color="isPrimary"
        onClick={onClickAddUrl}
      >Add url</Button>
    </Group>
  </div>
);

export default connect(
  state => ({
    active: state.app.active,
    scripts: state.script.scripts,
  }),
  dispatch => ({
    onClickAddScript: () => dispatch(addScript(createNewScript('code'))),
    onClickAddUrl: () => dispatch(addScript(createNewScript('url'))),
    onClickDeleteScript: (id) => dispatch(deleteScript({ id })),
    onChangeScript: (script) => dispatch(saveScript(script)),
  }),
)(App);
