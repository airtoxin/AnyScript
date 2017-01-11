import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import util from 'util';
import { Button } from 're-bulma';
import { toggleActivation, activate, deactivate, addScript, deleteScript, saveScript } from '../../actions';
import ScriptTab from '../ScriptTab';
import Activation from '../Activation';
import ScriptForm from '../ScriptForm';
import Debug from '../Debug';
import styles from './index.css';

const createNewScript = () => ({
  id: uuid(),
  code: '',
});

const App = ({ scripts, onClickAddScript, onClickDeleteScript, onChangeScriptCode }) => (
  <div>
    <Debug />
    {scripts.map(script => (
      <ScriptForm
        key={script.id}
        id={script.id}
        code={script.code}
        onChange={code => onChangeScriptCode({
          id: script.id,
          code,
        })}
        onDelete={onClickDeleteScript}
      />
    ))}
    <Button
      className={styles.button}
      color="isPrimary"
      onClick={onClickAddScript}
    >Add script</Button>
  </div>
);

export default connect(
  state => ({
    active: state.app.active,
    scripts: state.script.scripts,
  }),
  dispatch => ({
    onClickAddScript: () => dispatch(addScript(createNewScript())),
    onClickDeleteScript: (id) => dispatch(deleteScript({ id })),
    onChangeScriptCode: (script) => dispatch(saveScript(script))
  }),
)(App);
