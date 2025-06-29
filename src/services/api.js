import axios from 'axios';

export const getLogs = async () => {
  const res = await axios.get('http://localhost:8000/logs');
  return res.data;
};

export const getAlerts = async () => {
  const res = await axios.get('http://localhost:8000/alerts');
  return res.data;
};