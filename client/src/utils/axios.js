import axios from 'axios';
// get from localStorage

const api = axios.create({

    baseURL: 'http://localhost:5000/api', // Replace with your backend URL
    headers: {
        'Content-Type': 'application/json',
            },
});

api.interceptors.request.use((config)=>{
const token=localStorage.getItem('token');
if(token){
    config.headers['Authorization'] = `Bearer ${token}`;
}
return config;
});
export default api;
