import axios, { AxiosInstance } from "axios";
import cookies from "js-cookie";
import config from "../config/config.json";

export const customAxios: AxiosInstance = axios.create({
  baseURL: config.SERVER_ADDRESS,
  headers: {
    Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhZG1pbjEiLCJpYXQiOjE2OTkzODA1MzQsImV4cCI6MTY5OTk4NTMzNCwiaXNzIjoiREVFUCIsInN1YiI6InRva2VuIn0.X77jqKPn4uJhhe7QycEQufL-iLWqqOOkCCqx4yZHrxM"}`,
    "ACCESS-KEY":
      "d15ee2fe18d2ebe2ef7afda51ffd3114e5cd1f29dc8fd70e3ffee96b698ceed027a0",
  },
});

export default customAxios;
