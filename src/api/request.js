import axios from 'axios';
import { useAppStore } from '@/stores/app'

const service = axios.create({
    baseURL: 'http://121.41.52.20:8088'
});


//2. 请求拦截器
service.interceptors.request.use(config => {
    const appStore = useAppStore();
    let token = appStore.token;
    if (token) {
        config.headers['Token'] = token;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

//3. 响应拦截器
service.interceptors.response.use(response => {
    
    //判断code码
    return response.data;
    // return response;
}, error => {
    return Promise.reject(error);
});

export default service;