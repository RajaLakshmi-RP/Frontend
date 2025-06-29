import React, { useEffect, useState } from 'react';
import { getLogs } from '../services/api';

const Logs = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
  console.log('Logs component mounted');
  const fetchData = async () => {
    try {
      const data = await getLogs();
      console.log('Fetched logs:', data);
      setLogs(data);
    } catch (error) {
      console.error('Error fetching logs:', error);
    }
  };
  fetchData();
}, []);


  return (
    <div>
      <h2>Traffic Logs</h2>
      <table border="1" cellPadding="5" style={{ marginTop: '20px' }}>
        <thead>
          <tr>
            <th>IP</th>
            <th>Action</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => (
            <tr key={index}>
              <td>{log.ip}</td>
              <td>{log.action}</td>
              <td>{log.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Logs;
