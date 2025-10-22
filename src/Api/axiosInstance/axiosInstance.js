import axios from "axios";
import { baseUrl } from "../api_url";

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("access_token");
    if (!config.headers) {
      config.headers = null;
    }
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    // console.log(" Sent Header:", config.headers.Authorization);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
