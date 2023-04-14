import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://178.63.13.157:8090/mock-api/api/",
  timeout: 8000,
  headers: {
    Accept: "application/json",
  },
});
