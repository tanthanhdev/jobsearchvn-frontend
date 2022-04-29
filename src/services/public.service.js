import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const getCities = () => {
  return axios
    .get(API_URL + "/public/cities/", {})
    .then((response) => {
      if (response.data) {
        return response.data;
      }
      return null
    });
};

const getCountries = () => {
  return axios
    .get(API_URL + "/public/countries/", {})
    .then((response) => {
      if (response) {
        return response;
      }
      return null
    });
};

const PublicService = {
  getCities,
  getCountries,
};

export default PublicService;
