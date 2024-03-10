import axios, { AxiosInstance } from "axios";
import config from "../config/config.json";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzIiwiaWF0IjoxNzAxMDkwMjYzLCJleHAiOjE3MDE2OTUwNjMsImlzcyI6IkRFRVAiLCJzdWIiOiJ0b2tlbiJ9.DS15LxAJ2J_tz2KFd_cO8642zkHaoGlcXZtx_zRo6kk";

export const customAxios: AxiosInstance = axios.create({
  baseURL: config.SERVER_ADDRESS,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default customAxios;
