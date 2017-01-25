import React from 'react';
import { Input, Button } from 're-bulma';
import CodeScript from './CodeScript';
import UrlScript from './UrlScript';
import common from '../common.css';

export default ({ id, type, value, urlRegExp, onChange, onChangeUrlRegExp, onDelete }) => {
  let ScriptComponent = null;
  if (type === 'code') ScriptComponent = CodeScript;
  if (type === 'url') ScriptComponent = UrlScript;

  return (
    <div className={`${common.flexCol} ${common.boxContainer} ${common.script}`}>
      <ScriptComponent
        id={id}
        value={value}
        onChange={onChange}
      />
      <div className={common.flexRow}>
        <Input
          className={`${common.box} ${common.flex1}`}
          placeholder="url regexp"
          value={urlRegExp}
          onChange={event => onChangeUrlRegExp(event.target.value)}
        />
        <Button
          className={`${common.box} ${common.flex1}`}
          color="isDanger"
          onClick={onDelete}
        >Delete</Button>
      </div>
    </div>
  );
};
