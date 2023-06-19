/* eslint-disable prettier/prettier */
import axios from 'axios';

const local='http://localhost:5454';
const ip='http://172.26.208.1:5454';

export const api = axios.create({
  baseURL: ip,
  headers: {
    'Content-Type': 'application/json',
    // Add any other custom headers as needed
  },
});
