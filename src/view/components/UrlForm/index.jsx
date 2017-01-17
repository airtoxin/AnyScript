import React, { Component, PropTypes } from 'react';
import { debounce } from 'lodash';
import { Input, Button } from 're-bulma';
import common from '../common.css';

export default ({ url, onChange, onDelete }) => (
  <div className={`${common.flexCol} ${common.boxContainer} ${common.script}`}>
    <Input className={`${common.box}`} value={url} onChange={event => onChange(event.target.value)} placeholder="script url" />
    <div className={common.flexRow}>
      <Input className={`${common.box} ${common.flex1}`} placeholder="domain" />
      <Button className={`${common.box} ${common.flex1}`} color="isDanger" onClick={() => onDelete()}>Delete</Button>
    </div>
  </div>
);
