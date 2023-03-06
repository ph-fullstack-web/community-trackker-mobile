import axios from 'axios';
import {Platform} from 'react-native';

export const communityTrackerAPI = axios.create({
  baseURL:
    Platform.OS === 'ios'
      ? 'http://localhost:8000/api'
      : 'http://10.0.2.2:8000/api',
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
