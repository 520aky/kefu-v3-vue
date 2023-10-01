import axios from 'axios';
import pinia  from '@/stores';
import { useAppStore } from '@/stores/app'
const appStore = useAppStore(pinia);
const service = axios.create({
    baseURL: window.PLATFROM_CONFIG.baseUrl,
    timeout: 5000,
});


import { useRouter } from 'vue-router'
const router = useRouter()

//2. 请求拦截器
service.interceptors.request.use(config => {
    
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
    const {code, msg} = response.data
    if(code == -2){
         appStore.clearToken()
        const redirect = encodeURIComponent(window.location.href)
        router.push({path: '/login'})
        return Promise.reject(msg)
    }
    return response.data;
}, error => {
    return Promise.reject(error);
});

export default service;