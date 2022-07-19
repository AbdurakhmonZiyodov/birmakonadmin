import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import store from '../redux/store';
import { logoutAction } from '../redux/slices/auth';

export const baseUrl = 'https://birmakon.qwertyuz.ru';

const $api = axios.create({
  baseURL: baseUrl,
});

$api.interceptors.request.use(async config => {
  let token = store?.getState()?.auth?.user?.data?.token;

  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };
  }
  return config;
});

$api.interceptors.response.use(
  (response) => {

    return response;
  },
  async (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        store.dispatch(logoutAction())
      }
    }
    return Promise.reject(error);
  }
);


export default $api;

export const getConfig = async () => {
  let token = JSON.parse((await AsyncStorage.getItem('auth')) || '{}')?.user
    ?.token;

  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
}