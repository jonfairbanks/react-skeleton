import axios from 'axios'
const apiEndpoint = process.env.REACT_APP_API

// Retrieve a list of all users (optionally filter by url params)
export const registerUser = (User, callback) => {
  const { username, password, name } = User
  axios
    .post('https://' + apiEndpoint + '/user', {
      username,
      password,
      name,
    })
    .then(result => {
      callback(result.data);
    })
    .catch(error => {
      callback({success: false, msg: "Error calling api."});
    })
};

export const loginUser = (Credentials, callback) => {
  const { username, password } = Credentials
  axios
    .post('https://' + apiEndpoint + '/login', { username, password })
    .then(result => {
      callback(result.data);
    })
    .catch(error => {
      callback({success: false, msg: "Error calling api."});
    })
}
