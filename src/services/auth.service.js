import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const isLoggedIn = () => {
  const user = localStorage.getItem("user");
  const authentication = JSON.parse(localStorage.getItem("authentication"));
  let currentTimeInSeconds=Math.floor(Date.now()/1000); //unix timestamp in seconds
  if (user && authentication.access_token) {
    if (authentication.expires_in >= currentTimeInSeconds) {
      return true;
    } else {
      localStorage.removeItem('user');
      localStorage.removeItem('authentication');
    }
  }
  return false;
}

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

const resetPass = ({password, confirm_password, access_token}) => {
  return axios
    .put(API_URL + "/auth/reset-password/", {
      password, confirm_password, access_token,
    })
    .then((response) => {
      return response
    });
};

const activeAccount = ({access_token}) => {
  return axios
    .post(API_URL + "/auth/active-account/", {
      access_token,
    })
    .then((response) => {
      return response
    });
};

const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("authentication");
};

const authService = {
  register,
  login,
  logout,
  forgotPass,
  resetPass,
  activeAccount,
  isLoggedIn,
};

export default authService;
