import axios from "axios";

// Single axios instance so base URL, timeouts, and interceptors
// live in exactly one place.
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api",
  timeout: 30000,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error.response?.data?.message || error.message || "Something went wrong while contacting the server.";
    return Promise.reject(new Error(message));
  }
);
