import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Logs from './pages/Logs';
import Alerts from './pages/Alerts';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logs" element={<Logs />} />
        <Route path="/alerts" element={<Alerts />} />
      </Routes>
    </Router>
  );
}

export default App;
