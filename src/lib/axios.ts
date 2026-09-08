
import axios, { AxiosRequestConfig } from 'axios';

export const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const backendApi = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig
): Promise<T> => {
  return api({
    ...config,
    ...options,
  }).then(({ data }) => data);
};
