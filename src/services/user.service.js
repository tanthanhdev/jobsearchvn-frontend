import axios from "axios";
import authHeader from "./auth-header";
import authHeaderFile from "./auth-header-file";

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

const saveEmployerProfile = (data) => {
  console.log(1111, data);
  return axios.patch(API_URL + "/employers/", data, { headers: authHeaderFile() });
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

const create_campaign = (name, position, city_id) => {
  return axios
    .post(API_URL + "/campaigns/", { name, position, city_id } , { headers: authHeader() })
    .then((response) => {
      if (response) {
        return response;
      }
      return null;
    });
}

const update_campaign = (slug, data) => {
  return axios
    .patch(API_URL + '/campaigns/' + slug + '/', {...data} , { headers: authHeader() })
    .then((response) => {
      if (response.data) {
        return response;
      }
      return null;
    })
}

const getAllCampaigns = () => {
  return axios
    .get(API_URL + "/campaigns/", { headers: authHeader() })
    .then((response) => {
      if (response) {
        return response;
      }
      return null
    });
}

const getMatchCV = () => {
  return axios
    .get(API_URL + "/match-cv/", { headers: authHeader() })
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
  deleteJob,
  saveEmployerProfile,
  create_campaign,
  getAllCampaigns,
  getMatchCV,
  update_campaign,
};

export default userService