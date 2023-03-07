import axios, {AxiosError, AxiosResponse, HttpStatusCode} from 'axios';
import {AxiosErrorCode} from 'constants/errors';
import {Platform} from 'react-native';

export const communityTrackerAPI = axios.create({
  baseURL:
    Platform.OS === 'ios'
      ? 'http://localhost:8000/api'
      : 'http://10.0.2.2:8000/api',
  timeout: 60000,
});

communityTrackerAPI.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError<unknown, any>) => {
    const errorJSON: any = error.toJSON();
    if (errorJSON?.code === AxiosErrorCode.ERR_NETWORK) {
      return Promise.reject({
        ...errorJSON,
        status: HttpStatusCode.InternalServerError,
      });
    }

    return Promise.reject(errorJSON);
  }
);
