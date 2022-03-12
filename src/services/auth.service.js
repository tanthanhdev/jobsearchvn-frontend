import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const register = (firstname, lastname, email, password) => {
  return axios.post(API_URL + "/auth/sign-up/", {
    first_name: firstname,
    last_name: lastname,
    email,
    password,
    group: "member"
  }).then((response) => {
    return response
  });;
};

const login = (email, password) => {
  return axios
    .post(API_URL + "/auth/login/", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.results.access_token) {
        localStorage.setItem("user", JSON.stringify(response.data.results.user));
        return response.data.results.user;
      }
      return null
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
