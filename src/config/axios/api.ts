import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;
// const isServer = typeof window === "undefined";
const axiosClient = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
