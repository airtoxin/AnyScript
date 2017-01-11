import React from 'react';
import { connect } from 'react-redux';
import util from 'util';

const Debug = ({ state }) => (
  <pre>
    {util.inspect(state, { depth: null })}
  </pre>
);

const Component = process.env.NODE_ENV === 'production' ?
  null : connect(state => ({ state }))(Debug);

export default Component;
