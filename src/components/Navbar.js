import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', background: '#f0f0f0' }}>
      <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
      <Link to="/logs" style={{ marginRight: '10px' }}>Logs</Link>
      <Link to="/alerts">Alerts</Link>
    </nav>
  );
}

export default Navbar;
