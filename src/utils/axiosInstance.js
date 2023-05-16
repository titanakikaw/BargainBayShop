import axios from "axios";

const baseURL = "http://localhost:3000/";

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 3000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    let updatedConfig = { ...config };
    const { accessToken } = JSON.parse(localStorage.getItem("accessToken"));
    if (accessToken) {
      updatedConfig.headers.Authorization = `Bearer ${accessToken}`;
    }
    return updatedConfig;
  },
  (err) => {
    return Promise.reject(err);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default axiosInstance;
