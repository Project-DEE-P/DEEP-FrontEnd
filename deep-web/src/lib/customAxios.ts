import axios, { AxiosInstance } from "axios";
import cookies from "js-cookie";
import config from "../config/config.json";

export const customAxios: AxiosInstance = axios.create({
  baseURL: config.SERVER_ADDRESS,
  headers: {
    Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhZG1pbiIsImlhdCI6MTY5OTM2NTgzOSwiZXhwIjoxNjk5OTcwNjM5LCJpc3MiOiJERUVQIiwic3ViIjoidG9rZW4ifQ.xDQZ543zzejlzgDBtSJtDZqGOYjztKUZv4PW7o2tC48"}`,
  },
});

export const templateAxios = axios.create({
  baseURL: "http://220.122.166.117/v2/api/card/template",
  timeout: 10000, 
  headers: {
    "Content-Type": "application/json",
  },
  transformRequest: [(data) => JSON.stringify(data)],
  transformResponse: [(data) => JSON.parse(data)],
});

export default customAxios;