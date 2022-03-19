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
        localStorage.setItem("authentication", JSON.stringify(response.data.results));
        return response.data.results.user;
      }
      return null
    });
};

const forgotPass = (email) => {
  return axios
    .post(API_URL + "/auth/forgot-password/", {
      email,
    })
    .then((response) => {
      return response
    });
};

const resetPass = ({password, confirm_password, token}) => {
  return axios
    .put(API_URL + "/auth/reset-password/", {
      password, confirm_password, access_token: token,
    })
    .then((response) => {
      return response
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
  forgotPass,
  resetPass
};

export default authService;
