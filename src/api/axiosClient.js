import axios from "axios";
import authHeader from "services/auth-header";
const axiosClient = axios.create({
  // baseURL:`${API_URL}`,
  headers: {
    "Content-type": "application/json",
    Authorization: authHeader().Authorization,
    // 'Authorization':
  },
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    if (authHeader().Authorization) {
      config.headers.Authorization = authHeader().Authorization;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
export default axiosClient;
