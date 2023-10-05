import axios, { AxiosInstance } from "axios"
import cookies from 'js-cookie';

const SERVER_ADDRESS = 'http://172.20.10.4:8080'

export const customAxios: AxiosInstance = axios.create({
    baseURL: `${SERVER_ADDRESS}`,
    headers : {
        access_token: cookies.get('acess_token'),
    },
});