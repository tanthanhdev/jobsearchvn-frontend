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
  return axios.get(API_URL + "/employers/", { headers: authHeader() });
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

const getJob = () => {
  return axios.get(API_URL + "/jobs/", { headers: authHeader() });
};

const deleteJob = (slug) => {
  return axios.delete(API_URL + "/jobs/" + slug + '/', { headers: authHeader() });
};

const searchPublicEmployer = (q="") => {
  return axios
    .get(API_URL + "/public/employers/?q=" + q)
    .then((response) => {
      if (response) {
        return response;
      }
      return null
    });
};

// Member
const create_review = (employer_id, title, content, point) => {
  return axios
    .post(API_URL + "/reviews/", {
      employer_id, title, content, point
    }, { headers: authHeader() })
    .then((response) => {
      if (response.data) {
        return response;
      }
      return null
    });
};

const followCompany = (employer_id) => {
  return axios
    .post(API_URL + "/follow/companies/", {
      employer_id
    }, { headers: authHeader() })
    .then((response) => {
      if (response.data) {
        return response;
      }
      return null
    });
}

const getFollowOfCompanyDetail = (employer_id) => {
  return axios
    .get(API_URL + "/follow/companies/" + employer_id + "/", { headers: authHeader() })
    .then((response) => {
      if (response.data) {
        return response;
      }
      return null
    });
}

const deleteFollowOfCompanyDetail = (employer_id) => {
  return axios
    .delete(API_URL + "/follow/companies/" + employer_id + "/", { headers: authHeader() })
    .then((response) => {
      if (response) {
        return response;
      }
      return null
    });
}

const userService = {
  getPublicContent,
  getMemberBoard,
  getEmployerBoard,
  getPublicEmployer,
  getPublicJob,
  getPublicEmployerDetail,
  create_review,
  searchPublicEmployer,
  followCompany,
  getFollowOfCompanyDetail,
  deleteFollowOfCompanyDetail,
  getJob,
  deleteJob
};

export default userService