import axios from 'axios';

const axiosSecure = axios.create({
  baseURL: 'https://habitude-server-seven.vercel.app',
  timeout: 10000,
  headers: { 'X-Custom-Header': 'foobar' },
});

const UseAxiosSecure = () => {
  return axiosSecure;
};

export default UseAxiosSecure;
