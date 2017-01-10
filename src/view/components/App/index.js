import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { Button } from 're-bulma';
import { toggleActivation, activate, deactivate, addScript, saveScript } from '../../actions';
import ScriptTab from '../ScriptTab';
import Activation from '../Activation';
import ScriptForm from '../ScriptForm';
import styles from './index.css';

const createNewScript = () => ({
  id: uuid(),
  code: '',
});

const App = ({ scripts, onClickAddScript, onChangeScriptCode }) => (
  <div>
    {JSON.stringify(scripts)}
    {scripts.map(script => (
      <ScriptForm
        key={script.id}
        id={script.id}
        code={script.code}
        onChange={code => onChangeScriptCode({
          id: script.id,
          code,
        })}
      />
    ))}
    <Button className={styles.button} color="isPrimary" onClick={onClickAddScript}>Add script</Button>
  </div>
);

export default connect(
  state => ({
    active: state.app.active,
    scripts: state.script.scripts,
  }),
  dispatch => ({
    onClickAddScript: () => dispatch(addScript(createNewScript())),
    onChangeScriptCode: (script) => dispatch(saveScript(script))
  }),
)(App);
