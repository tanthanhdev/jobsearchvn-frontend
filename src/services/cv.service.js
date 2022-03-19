import axios from "axios";
import authHeader from "./auth-header";

const API_URL = process.env.REACT_APP_API_URL;

const create_cv = (cv_career, cv_design, title, target_major, cv_cv_educations, cv_cv_experiences,
    cv_cv_skills, cv_cv_social_activities, cv_cv_certificates) => {
  return axios
    .post(API_URL + "/cvs/", {
      cv_career, cv_design, title, target_major, cv_cv_educations, cv_cv_experiences,
      cv_cv_skills, cv_cv_social_activities, cv_cv_certificates
    }, { headers: authHeader() })
    .then((response) => {
      if (response.data.results.access_token) {
        localStorage.setItem("cv", JSON.stringify(response.data));
        return response.data;
      }
      return null
    });
};

const CvService = {
  create_cv,
};

export default CvService;
