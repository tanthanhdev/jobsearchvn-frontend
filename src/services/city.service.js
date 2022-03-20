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

const CityService = {
  getCities,
};

export default CityService;
