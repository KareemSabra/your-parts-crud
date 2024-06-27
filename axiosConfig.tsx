import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

// Create an axios instance with baseURL and default headers
const instance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});


// Response interceptor to handle responses
instance.interceptors.response.use(
  (res: AxiosResponse) => res,
  (error: AxiosError) => {
    // Handle response error
    return Promise.reject(error);
  }
);

export default instance;
