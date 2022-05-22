import axiosClient from "./axiosClient";

const API_URL = process.env.REACT_APP_API_URL;
const applyApi = {
  getAll() {
    return axiosClient.get(API_URL + "/analytic/applies/");
  },
};

export default applyApi;
