import axios from "axios";
const axiosInstance = axios.create({
  baseURL: 'https://api.coinbase.com/v2',
  // timeout: 1000,
});
axiosInstance.interceptors.response.use(response => {
  return response;
}, error => {
  console.log('error', error);
  return error;
});
axiosInstance.interceptors.request.use(response => {
  return response;
}, error => {
  console.log('error', error);
  return error;
});
class ApiClass {
  get(url, params) {
    return axiosInstance.get(url, params);
  }
  post(url, payload, config) {
    return axiosInstance.post(url, payload, config);
  }
}
export default ApiClass;
//# sourceMappingURL=index.js.map
