import axios from "axios";

/**
 * This serves as a middleware that ensures that all request to
 * a protected route is valid ( is being sent with a valid token )
 */
const Axios = axios.create({
  baseURL: "https://test.3scorers.com/api/v1",
});
Axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("AccessToken");
    if (token) {
      config.headers = {
        Authorization: token,
        "Content-Type": "application/json",
      };
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default Axios;
