import React, { Component, PropTypes } from 'react';
import { debounce } from 'lodash';
import { Input, Button } from 're-bulma';
import common from '../../common.css';

export default ({ value, onChange }) => (
  <Input className={`${common.box}`} value={value} onChange={event => onChange(event.target.value)} placeholder="script url" />
);
