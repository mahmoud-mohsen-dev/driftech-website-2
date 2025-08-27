import axios from "axios";

const BackendBaseURL = `${import.meta.env.BACKEND_BASE_URL}:${import.meta.env.PORT}`;

export default axios.create({
  baseURL: BackendBaseURL,
});
