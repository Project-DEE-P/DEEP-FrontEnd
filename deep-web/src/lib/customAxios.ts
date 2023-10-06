import axios, { AxiosInstance } from 'axios';
import cookies from 'js-cookie';

const SERVER_ADDRESS = 'http://10.80.162.51:8080';

export const customAxios: AxiosInstance = axios.create({
  baseURL: `${SERVER_ADDRESS}`, 
  headers: {
    access_token: cookies.get('access_token'),
  },
});