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
  (response: AxiosResponse) => {
    return response;
  },
  (e: AxiosError<unknown, any>) => {
    const error: any = e.toJSON();
    if (error?.code === AxiosErrorCode.ERR_NETWORK) {
      return Promise.reject({
        ...error,
        status: HttpStatusCode.InternalServerError,
      });
    } else if (error?.code === AxiosErrorCode.ERR_BAD_REQUEST) {
      return Promise.reject({...error, status: HttpStatusCode.BadRequest});
    }

    return Promise.reject(error);
  }
);
