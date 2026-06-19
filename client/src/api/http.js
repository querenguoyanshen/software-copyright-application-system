import axios from 'axios';export const api=axios.create({baseURL:'http://localhost:3001/api'});api.interceptors.response.use(r=>r.data);
