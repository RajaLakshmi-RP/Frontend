import React, { useEffect, useState } from 'react';
import { getAlerts } from '../services/api'; // ✅ Correct import

const Alerts = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAlerts(); // ✅ Correct usage
        setAlerts(data);
      } catch (error) {
        console.error('Error fetching alerts:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Alerts</h2>
      <table border="1">
        <thead>
          <tr>
            <th>IP</th>
            <th>Threat</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {alerts.map((alert, index) => (
            <tr key={index}>
              <td>{alert.ip}</td>
              <td>{alert.threat}</td>
              <td>{alert.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Alerts;
