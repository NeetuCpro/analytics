
import axios from "axios";

// Auto-detect the environment
const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://analytics.conversionprollp.com/api"
    : "http://localhost:5000/api";

const API = axios.create({ baseURL: BASE_URL });

// Fetch users
export const fetchUsers = async () => {
  try {
    const response = await API.get("/users");
    return Array.isArray(response.data) ? response.data : [];
  } catch (error) {
    return [];
  }
};

// Login API
export const loginUser = async (email, password) => {
  try {
    const response = await API.post("/users/login", { email, password });
    return response.data;
  } catch (error) {
    return { error: error.response?.data?.message || "Login failed" };
  }
};
