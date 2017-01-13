import React, { Component, PropTypes } from 'react';
import { debounce } from 'lodash';
import { Input, Button } from 're-bulma';

export default ({ url, onChange, onDelete }) => (
  <div>
    <Input value={url} onChange={event => onChange(event.target.value)}/>
    <Button color="isDanger" onClick={() => onDelete()}>Delete</Button>
  </div>
);
