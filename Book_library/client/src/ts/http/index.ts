import axios, { AxiosRequestConfig } from "axios";
import { API_URL } from '../constants/http';

const serverApi = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

const token = `Bearer ${localStorage.getItem('token')}`;

serverApi.defaults.headers.common['Authorization'] = token;

// serverApi.interceptors.request.use((config) => {
//   config.headers.Authorization = token;
//   return config;
// });

export default serverApi;
