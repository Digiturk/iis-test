import React from 'react';
import { Link } from 'react-router-dom';
import image from './logo192.png';

const Link1 = () => (
  <div style={{ backgroundColor: 'lightyellow', padding: 32 }}>
    link 1
    <img src={image} alt="logo" />
    | {" "} <Link to="/">Home</Link>
  </div>
);

export default Link1;