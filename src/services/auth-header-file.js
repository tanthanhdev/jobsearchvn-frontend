export default function authHeaderFile() {
  const authentication = JSON.parse(localStorage.getItem("authentication"));

  if (authentication && authentication.access_token) {
    // For Spring Boot back-end
    return { Authorization: authentication.token_type + ' ' + authentication.access_token,
    'Content-Type': 'multipart/form-data' }; //Bearer

    // for Node.js Express back-end
    // return { "x-access-token": authentication.access_token };
  } else {
    return {};
  }
}
