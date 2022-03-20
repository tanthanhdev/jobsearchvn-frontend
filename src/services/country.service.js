import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const getCountries = () => {
  return axios
    .get(API_URL + "/public/countries/", {})
    .then((response) => {
      if (response.data) {
        return response.data;
      }
      return null
    });
};

const CountryService = {
  getCountries,
};

export default CountryService;
