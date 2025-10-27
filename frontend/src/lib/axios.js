import axios from 'axios';
import { BASE_URL } from '../stores/useAuthStore'; // Import the base URL

export const axiosInstance = axios.create({
  baseURL: BASE_URL, // e.g., "https://hero-chat-app-ien8.onrender.com"
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  
  // 🛑 THIS IS THE CRITICAL FIX FOR SENDING THE COOKIE 🛑
  withCredentials: true, 
});