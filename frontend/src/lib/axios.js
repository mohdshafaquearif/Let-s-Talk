import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://let-s-talk.onrender.com/api" : "/api",
  withCredentials: true,
});
