import axios from "axios";
import authHeader from "./auth-header";

const API_URL = process.env.REACT_APP_API_URL;

const getPublicContent = () => {
  return axios.get(API_URL + "/");
};

const getUserBoard = () => {
  return axios.get(API_URL + "/profile-member", { headers: authHeader() });
};

const userService = {
  getPublicContent,
  getUserBoard,
};

export default userService