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


// Employer
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
const create_review = (employer_id, title, content, point) => {
  return axios
    .post(API_URL + "/reviews/", {
      employer_id, title, content, point
    }, { headers: authHeader() })
    .then((response) => {
      if (response.data) {
        localStorage.setItem("review", JSON.stringify(response.data));
        return response;
      }
      return null
    });
};

const userService = {
  getPublicContent,
  getMemberBoard,
  getEmployerBoard,
  getPublicEmployer,
  getPublicJob,
  getPublicEmployerDetail,
  create_review,
};

export default userService