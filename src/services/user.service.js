import axios from "axios";
import authHeader from "./auth-header";

const API_URL = process.env.REACT_APP_API_URL;

const getPublicContent = () => {
  return axios.get(API_URL + "/");
};

const getUserBoard = () => {
  return axios.get(API_URL + "/profile-member", { headers: authHeader() });
};

// Public employer
const getPublicEmployer = () => {
  return axios.get(API_URL + "/public/employers/");
};

const getPublicJob = () => {
  return axios.get(API_URL + "/public/jobs/");
};

// Member

const userService = {
  getPublicContent,
  getUserBoard,
  getPublicEmployer,
  getPublicJob,
};

export default userService