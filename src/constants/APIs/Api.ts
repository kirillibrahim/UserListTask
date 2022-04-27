import axios from "axios";

//export const baseUrl = process.env.REACT_APP_baseUrl;

/*
  Function to call diferent urls for different apis
*/
let baseUrl = "https://jonruna.github.io/tapi/";

export default axios.create({
  //live: 'https://confliveapi.key-frame.cf/api/'  test: http://conference.key-frame.cf/api/  `http://conference.key-frame.cf/api/`
  baseURL: baseUrl
  // headers: { 'Authorization': "Bearer "+par}
});
