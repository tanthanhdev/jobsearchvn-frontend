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

const saveCV = (cv_id) => {
  return axios
    .post(API_URL + "/cvs/save/", {cv_id}, { headers: authHeader() })
    .then((response) => {
      if (response.data) {
        return response;
      }
      return null;
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

const getAllCvs = () => {
  return axios
    .get(API_URL + "/cvs/save/", { headers: authHeader() })
    .then((response) => {
      if (response.data) {
        return response.data;
      }
      return null
    });
};

const getPublicCVDetail = (slug) => {
  return axios
    .get(API_URL + "/public/cvs/" + slug + "/", { headers: authHeader() })
    .then((response) => {
      if (response.data) {
        return response;
      }
      return null
    });
};

const deleteSaveCv = (cv_id) => {
  return axios
    .delete(API_URL + "/cvs/save/" + cv_id + '/', { headers: authHeader() })
    .then((response) => {
      if (response.data) {
        return response.data;
      }
      return null
    });
};

const getAllNotificationCvs = () => {
  return axios
    .get(API_URL + "/match-cv/", { headers: authHeader() })
    .then((response) => {
      if (response.data) {
        return response.data;
      }
      return null
    });
};


const searchCV = (q="", adr="", gender="", edu_lv="", edu_name="",
  comp_worked="", language="", display_priority="") => {
  return axios
    .get(API_URL + "/searches/cv/?q=" + q + "&adr=" + adr + "&gender=" + gender + "&edu_lv=" + edu_lv
      + "&edu_name=" + edu_name + "&comp_worked=" + comp_worked
      + "&language="+ language + "&display_priority=" + display_priority, { headers: authHeader() })
    .then((response) => {
      if (response.data) {
        return response;
      }
      return null;
    });
};

const getIsCVSaveExists = (cv_id) => {
  return axios
    .get(API_URL + "/cvs/save/" + cv_id + "/exists/", { headers: authHeader() })
    .then((response) => {
      if (response.data) {
        return response;
      }
      return null;
    });
};

const CvService = {
  create_cv,
  saveCV,
  getCareers,
  getDesigns,
  getAllCvs,
  deleteSaveCv,
  getAllNotificationCvs,
  searchCV,
  getPublicCVDetail,
  getIsCVSaveExists,
};

export default CvService;
