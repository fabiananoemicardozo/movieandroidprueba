import axios from 'axios';

const BASE_URL = "https://api.themoviedb.org/";

const apiDetails = axios.create({
  baseURL: BASE_URL,
});

export default apiDetails;