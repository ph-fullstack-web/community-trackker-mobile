import axios, {AxiosError, AxiosResponse, HttpStatusCode} from 'axios';
import {API_URL_LOCAL_AND, API_URL_LOCAL_IOS} from 'react-native-dotenv';
import {AxiosErrorCode} from 'constants/errors';
import {Platform} from 'react-native';

export const communityTrackerAPI = axios.create({
  baseURL: Platform.OS === 'ios' ? API_URL_LOCAL_AND : API_URL_LOCAL_IOS,
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
