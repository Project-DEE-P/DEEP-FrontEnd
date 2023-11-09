import axios, { AxiosInstance } from "axios";
import cookies from "js-cookie";
import config from "../config/config.json";

export const customAxios: AxiosInstance = axios.create({
  baseURL: config.SERVER_ADDRESS,
  headers: {
    Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhZG1pbjEiLCJpYXQiOjE2OTkzODA1MzQsImV4cCI6MTY5OTk4NTMzNCwiaXNzIjoiREVFUCIsInN1YiI6InRva2VuIn0.X77jqKPn4uJhhe7QycEQufL-iLWqqOOkCCqx4yZHrxM"}`,
  },
});

export default customAxios;
