import axios from 'axios';

const axiosSecure = axios.create({
  baseURL: 'http://localhost:8000',
  timeout: 10000,
  headers: { 'X-Custom-Header': 'foobar' },
});

const UseAxiosSecure = () => {
  return axiosSecure;
};

export default UseAxiosSecure;
