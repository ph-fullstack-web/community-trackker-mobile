import axios from 'axios';

export const communityTrackerAPI = axios.create({
  baseURL: 'http://192.168.1.15:8000/api/',
  timeout: 60000,
});

communityTrackerAPI.interceptors.response.use(
  response => {
    return response;
  },
  e => {
    const error = e.toJSON();
    if (error.code === 'ERR_NETWORK') {
      error.code = 500;
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);
