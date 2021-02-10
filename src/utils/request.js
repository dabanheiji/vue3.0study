import axios from 'axios';
import {stringify} from './tools';

// const BASE_URL = "http://127.0.0.1:9000";
// const BASE_URL = "";

const request = axios.create({
    // baseURL:BASE_URL
});

request.interceptors.request.use(
    config=>{
        config.headers.token = sessionStorage.getItem('token');
        return config;
    },
    err=>Promise.reject(err)
)

request.get = async (url, data, option={})=>{
    return new Promise((resolve, reject)=>{
        request({
            url: `${url}?${stringify(data)}`,
            method:"GET",
            ...option,
            headers:{
                "Content-Type": "application/json",
                ...option.headers
            }
        }).then(res=>resolve(res.data)).catch(err=>reject(err))
    })
}

request.post = async (url, data, option={})=>{
    return new Promise((resolve, reject)=>{
        request({
            url,
            method:"POST",
            data,
            ...option,
            headers:{
                "Content-Type": "application/json",
                ...option.headers
            }
        }).then(res=>resolve(res.data)).catch(err=>reject(err))
    })
}


export default request;