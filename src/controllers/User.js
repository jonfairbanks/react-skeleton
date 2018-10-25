import axios from 'axios'
const apiEndpoint = process.env.REACT_APP_API

// Retrieve a list of all users (optionally filter by url params)
export const getUser = (userId, callback) => {
  axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');

  axios.get('https://' + apiEndpoint + '/user', {
      headers: {
        'UserId': userId
      }
    })

    .then(result => {
      result.success = true;
      callback(result);
    })

    .catch(error => {
      callback({success: false, msg: "Error calling api."});
    })
}
