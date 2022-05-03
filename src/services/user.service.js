import axios from "axios";
import authHeader from "./auth-header";
import authHeaderFile from "./auth-header-file";

const API_URL = process.env.REACT_APP_API_URL;

const getPublicContent = () => {
  return axios.get(API_URL + "/");
};

// const getMemberBoard = (id) => {
//   return axios.get(API_URL + "/members/" + id + "/", { headers: authHeader() });
// };
const getEmployerBoard = () => {
  return axios.get(API_URL + "/employers/", { headers: authHeader() });
};


// Employer ======================================
const getPublicEmployer = () => {
  return axios.get(API_URL + "/public/employers/");
};

const getPublicEmployerDetail = (slug) => {
  return axios.get(API_URL + "/public/employers/" + slug + "/");
};

const getPublicJob = () => {
  return axios.get(API_URL + "/public/jobs/");
};

const getPublicJobDetail = (slug) => {
  return axios.get(API_URL + "/public/jobs/" + slug + "/");
};

const saveEmployerProfile = (data) => {
  console.log(1111, data);
  return axios.patch(API_URL + "/employers/", data, { headers: authHeaderFile() });
};

const getJob = () => {
  return axios.get(API_URL + "/jobs/", { headers: authHeader() });
};

const getJobDetail = (slug) => {
  return axios.get(API_URL + "/jobs/" + slug + "/", { headers: authHeader() });
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

const getAllCampaigns = (q="") => {
  return axios
    .get(API_URL + "/campaigns/?q=" + q, { headers: authHeader() })
    .then((response) => {
      if (response) {
        return response;
      }
      return null
    });
}

const getCampaign = (slug) => {
  return axios
    .get(API_URL + "/campaigns/" + slug + "/", { headers: authHeader() })
    .then((response) => {
      if (response) {
        return response;
      }
      return null
    });
}

const getJobsCampaign = (slug) => {
  return axios
    .get(API_URL + "/jobs/campaign/" + slug + "/", { headers: authHeader() })
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

const getMatchCVOfCampaign = (id) => {
  return axios
    .get(API_URL + "/match-cv/campaign/" + id + "/", { headers: authHeader() })
    .then((response) => {
      if (response) {
        return response;
      }
      return null
    });
}

const createJob = (data, campaign_id) => {
  return axios
    .post(API_URL + "/jobs/", { ...data, campaign_id } , { headers: authHeader() })
    .then((response) => {
      if (response) {
        return response;
      }
      return null;
    });
}

const update_job = (data, slug) => {
  return axios
    .patch(API_URL + '/jobs/' + slug + '/', {...data} , { headers: authHeader() })
    .then((response) => {
      if (response.data) {
        return response;
      }
      return null;
    })
}

const switch_active_job = (data, slug) => {
  return axios
    .patch(API_URL + '/switch-active/job/' + slug + '/', {...data} , { headers: authHeader() })
    .then((response) => {
      if (response.data) {
        return response;
      }
      return null;
    })
}

const getApplyForCampaign = (slug) => {
  return axios
    .get(API_URL + "/apply/campaigns/" + slug + "/", { headers: authHeader() })
    .then((response) => {
      if (response.data) {
        return response;
      }
      return null;
    });
};

const updateApplyForCampaign = (status, apply_id) => {
  return axios
    .patch(API_URL + "/employer/apply/jobs/" + apply_id + "/", {status}, { headers: authHeader() })
    .then((response) => {
      if (response.data) {
        return response;
      }
      return null;
    });
};


// Member =================================================
const create_review = (employer_id, title, content, point) => {
  return axios
    .post(
      API_URL + "/reviews/",
      {
        employer_id,
        title,
        content,
        point,
      },
      { headers: authHeader() }
    )
    .then((response) => {
      if (response.data) {
        return response;
      }
      return null;
    });
};

const followCompany = (employer_id) => {
  return axios
    .post(
      API_URL + "/follow/companies/",
      {
        employer_id,
      },
      { headers: authHeader() }
    )
    .then((response) => {
      if (response.data) {
        return response;
      }
      return null;
    });
};

const getFollowOfCompanyDetail = (employer_id) => {
  return axios
    .get(API_URL + "/follow/companies/" + employer_id + "/", {
      headers: authHeader(),
    })
    .then((response) => {
      if (response.data) {
        return response;
      }
      return null;
    });
};

const deleteFollowOfCompanyDetail = (employer_id) => {
  return axios
    .delete(API_URL + "/follow/companies/" + employer_id + "/", {
      headers: authHeader(),
    })
    .then((response) => {
      if (response) {
        return response;
      }
      return null;
    });
};

const createApplyJob = (job_id) => {
  return axios
    .post(API_URL + "/apply/jobs/", {job_id}, { headers: authHeader() })
    .then((response) => {
      if (response.data) {
        return response;
      }
      return null;
    });
};

const getApplyJob = () => {
  return axios
    .get(API_URL + "/apply/jobs/", { headers: authHeader() })
    .then((response) => {
      if (response.data) {
        return response;
      }
      return null;
    });
};

const getApplyJobDetail = (id, slug) => {
  return axios
    .get(API_URL + "/apply/jobs/" + (id ? id : slug ? slug : '') + "/", { headers: authHeader() })
    .then((response) => {
      if (response.data) {
        return response;
      }
      return null;
    });
};

const deleteApplyJobDetail = (id) => {
  return axios
    .delete(API_URL + "/apply/jobs/" + id + "/", { headers: authHeader() })
    .then((response) => {
      if (response.data) {
        return response;
      }
      return null;
    });
};

const getSaveJob = () => {
  return axios
    .get(API_URL + "/save/jobs/", { headers: authHeader() })
    .then((response) => {
      return response;
    });
};

const deleteSaveJobDetail = (id) => {
  return axios
    .delete(API_URL + "/save/jobs/" + id + "/", { headers: authHeader() })
    .then((response) => {
      if (response.data) {
        return response;
      }
      return null;
    });
};

const getCVs = (page) => {
  return axios
    .get(API_URL + "/cvs/?page=" + (page ? page : 1), { headers: authHeader() })
    .then((response) => {
      if (response.data) {
        return response;
      }
      return null;
    });
};

const getCVDetail = (slug) => {
  return axios
    .get(API_URL + "/cvs/?slug=" + slug, { headers: authHeader() })
    .then((response) => {
      if (response.data) {
        return response;
      }
      return null;
    });
};

const deleteCVDetail = (slug) => {
  return axios
    .delete(API_URL + "/cvs/?slug=" + slug, { headers: authHeader() })
    .then((response) => {
      if (response.data) {
        return response;
      }
      return null;
    });
};

const updateCV = (slug, data) => {
  return axios
    .patch(API_URL + '/cvs/' + slug + '/', {...data} , { headers: authHeader() })
    .then((response) => {
      if (response.data) {
        return response;
      }
      return null;
    })
}

const userService = {
  getCVs,
  getCVDetail,
  deleteCVDetail,
  updateCV,
  getPublicContent,
  // getMemberBoard,
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
  getJobDetail,
  deleteJob,
  saveEmployerProfile,
  create_campaign,
  getAllCampaigns,
  getMatchCV,
  getMatchCVOfCampaign,
  update_campaign,
  getCampaign,
  createJob,
  getJobsCampaign,
  update_job,
  switch_active_job,
  getApplyJob,
  createApplyJob,
  getApplyJobDetail,
  deleteApplyJobDetail,
  getApplyForCampaign,
  updateApplyForCampaign,
  getPublicJobDetail,
  getSaveJob,
  deleteSaveJobDetail,
};

export default userService;
