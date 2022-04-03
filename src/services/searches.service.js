import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const searchesJob = (q="", adr="") => {
  return axios
    .get(API_URL + "/searches/job/?q=" + q + "&adr=" + adr)
    .then((response) => {
      if (response) {
        return response;
      }
      return null
    });
};

const searchesService = {
    searchesJob,
};

export default searchesService;
