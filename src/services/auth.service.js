import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "/api/auth/login/", {
      email,
      password,
    })
    .then((response) => {
      console.log(response.data.results);
      if (response.data.results.access_token) {
        localStorage.setItem("user", JSON.stringify(response.data.results));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
