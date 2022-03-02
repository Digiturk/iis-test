import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div style={{ backgroundColor: 'lightgreen', padding: 32 }}>
    link 2
    | {" "} <Link to="/">Home</Link>
  </div>
);