import axios from "axios";
import authHeader from "./auth-header";

const API_URL = process.env.REACT_APP_API_URL;

const create_cv = (title, target_major, cv_cv_educations, cv_cv_experiences,
  cv_cv_skills, cv_cv_social_activities, cv_cv_certificates, cv_template_id, cv_career, cv_design) => {
  return axios
    .post(API_URL + "/cvs/", {
      title, target_major, cv_cv_educations, cv_cv_experiences,
      cv_cv_skills, cv_cv_social_activities, cv_cv_certificates,
      cv_template_id, cv_career, cv_design
    }, { headers: authHeader() })
    .then((response) => {
      if (response.data) {
        localStorage.setItem("cv", JSON.stringify(response.data));
        return response;
      }
      return null
    });
};

const getCareers = () => {
  return axios
    .get(API_URL + "/public/cv_careers/", {})
    .then((response) => {
      if (response.data) {
        return response.data;
      }
      return null
    });
};

const getDesigns = () => {
  return axios
    .get(API_URL + "/public/cv_designs/", {})
    .then((response) => {
      if (response.data) {
        return response.data;
      }
      return null
    });
};

const CvService = {
  create_cv,
  getCareers,
  getDesigns,
};

export default CvService;
