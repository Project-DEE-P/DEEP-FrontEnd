import axios, { AxiosInstance } from "axios";
import cookies from "js-cookie";
import config from "../config/config.json";

export const customAxios: AxiosInstance = axios.create({
  baseURL: config.SERVER_ADDRESS,
  headers: {
    Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhZG1pbiIsImlhdCI6MTY5NjUxNjIzNiwiZXhwIjoxNjk3MTIxMDM2LCJpc3MiOiJERUVQIiwic3ViIjoidG9rZW4ifQ.0nbNhZVZcJ4pBSWwCugzpC4oJbz5zSFswD-xaiCO8Ug"}`,
  },
});
