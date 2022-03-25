import axios from "axios";
import authHeader from "./auth-header";

const API_URL = process.env.REACT_APP_API_URL;

const getPublicContent = () => {
  return axios.get(API_URL + "/");
};

const getMemberBoard = (id) => {
  return axios.get(API_URL + "/members/" + id + "/", { headers: authHeader() });
};
const getEmployerBoard = (id) => {
  return axios.get(API_URL + "/employers/" + id + "/", { headers: authHeader() });
};


// Public employer
const getPublicEmployer = () => {
  return axios.get(API_URL + "/public/employers/");
};

const getPublicEmployerDetail = (slug) => {
  return axios.get(API_URL + "/public/employers/" + slug + "/");
};

const getPublicJob = () => {
  return axios.get(API_URL + "/public/jobs/");
};

// Member

const userService = {
  getPublicContent,
  getMemberBoard,
  getEmployerBoard,
  getPublicEmployer,
  getPublicJob,
  getPublicEmployerDetail,
};

export default userService