import axios from "axios";

const baseURL = "http://localhost:8080";
// process.env.BACKEND_URL;
// const isServer = typeof window === "undefined";
const axiosClient = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
