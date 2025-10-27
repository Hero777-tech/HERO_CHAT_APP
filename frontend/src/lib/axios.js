import axios from "axios";
import { BASE_URL } from "../store/useAuthStore"; // 1. IMPORT THE LIVE URL

export const axiosInstance = axios.create({
  baseURL: BASE_URL + "/api", // 2. USE THE LIVE URL FOR ALL API CALLS
  withCredentials: true,
});
