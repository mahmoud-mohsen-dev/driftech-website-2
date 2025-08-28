import axios from "axios";

// const BackendBaseURL = `${import.meta.env.BACKEND_BASE_URL}:${import.meta.env.PORT}`;
// const BackendBaseURL = `${import.meta.env.BACKEND_BASE_URL}`;
const BackendBaseURL = import.meta.env.VITE_BACKEND_BASE_URL;

export default axios.create({
  baseURL: BackendBaseURL,
});
