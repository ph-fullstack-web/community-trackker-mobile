import axios, {AxiosError, AxiosResponse} from 'axios';
import {API_URL_AND, API_URL_IOS} from '@env';
import {Platform} from 'react-native';

import {errorStatusMap} from 'constants/errors';

export const communityTrackerAPI = axios.create({
  baseURL: Platform.select({
    ios: API_URL_IOS,
    android: API_URL_AND,
  }),
  timeout: 60000,
  timeoutErrorMessage: 'Connection has timed out.\nPlease try again later.',
});

communityTrackerAPI.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError<unknown, any>) => {
    const errorJSON: any = error.toJSON();

    if (errorStatusMap.has(errorJSON?.code)) {
      return Promise.reject({
        ...errorJSON,
        status: errorStatusMap.get(errorJSON?.code),
      });
    }

    return Promise.reject(errorJSON);
  }
);
