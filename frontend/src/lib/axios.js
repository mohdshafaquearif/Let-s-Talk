import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://let-s-talk.onrender.com/api",
  withCredentials: true,
});
