import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const getCvTemplates = (q="", cv_career="", cv_design="", state="") => {
  return axios
    .get(API_URL + "/public/cv-template/?q=" + q + "&cv_career=" + cv_career + "&cv_design=" + cv_design + "&state=" + state,)
    .then((response) => {
      if (response.data) {
        return response.data;
      }
      return null
    });
};

const setViewCvTemplate = (template_id) => {
  return axios
    .post(API_URL + "/public/view/cv-template/", {template_id})
    .then((response) => {
      if (response.data) {
        return response.data;
      }
      return null
    });
};

const CvTemplateService = {
  getCvTemplates,
  setViewCvTemplate,
};

export default CvTemplateService;
