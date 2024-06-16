import axios from "axios";
import { getCookie } from "./CookieConfig";

const instance = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://jrugs.up.railway.app",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

function setToken(token) {
  instance.defaults.headers.common["Authorization"] = `Bearer ${getCookie(
    token
  )}`;
}

export { instance, setToken };
