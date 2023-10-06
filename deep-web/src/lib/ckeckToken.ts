import axios, { AxiosRequestConfig } from 'axios';
import cookies from 'js-cookie';
import * as jwt from 'jsonwebtoken';

const SERVER_URL = 'http://172.20.10.4:8080'; 
const getToken = () => cookies.get('access_token');

export const checkToken = async (config: AxiosRequestConfig) => {
  let accessToken = getToken() as string;
  const decode = jwt.decode(accessToken) as any;
  const nowDate = new Date().getTime() / 1000;

  config.headers = config.headers || {};
  
  // 토큰 만료시간이 지났다면
  if (decode && decode.exp && decode.exp < nowDate) {
    const { data } = await axios.post(`${SERVER_URL}/token`, { accessToken }, {
      headers: {
        access_token: getToken(),
      },
    });
    
    const { refreshToken } = data.data;
    
    accessToken = refreshToken;
  }
  
  config.headers['access_token'] = accessToken;
  return config;
}
