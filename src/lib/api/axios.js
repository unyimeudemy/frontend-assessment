import axios from "axios";
import dotenv from "dotenv";
// dotenv.config({ path: "./.env" });

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
