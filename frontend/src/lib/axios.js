import axios from 'axios';

const axiosInstance = axios.create({
  baseURL:"http://localhost:5001/api",
  withCredentials: true,//we can send cookies with requests & responses
});

export default axiosInstance;
