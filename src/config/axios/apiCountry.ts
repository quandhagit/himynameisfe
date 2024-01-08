import axios from "axios";

const baseURL = "https://countriesnow.space/api/v0.1/";

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  return config;
});

export default api;
