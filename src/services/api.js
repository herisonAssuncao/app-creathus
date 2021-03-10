import axios from 'axios';

const api = axios.create({
  baseURL: "http://54.94.80.69:9000/api"
})

export default api;