import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const getJobTypes = () => {
  return axios
    .get(API_URL + "/public/job-types/", {})
    .then((response) => {
      if (response) {
        return response;
      }
      return null
    });
};

const jobService = {
  getJobTypes,
};

export default jobService;
