import request from '../utils/request';

const API = {
    Login:"/api/blogs/user/login", //登录
}

/**
 * 登录
 * @param {Object} params 
 */
export const Login = (params)=>{
    return request.post(API.Login, params);
}