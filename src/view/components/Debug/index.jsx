import React from 'react';
import util from 'util';

export default (props) => process.env.NODE_ENV === 'production' ? null : (
  <pre>
    {util.inspect(props, { depth: null })}
  </pre>
);
