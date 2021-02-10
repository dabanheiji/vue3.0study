import request from '../utils/request';

const API = {
    getBlogs: "/api/blogs/blog/getBlogs", //获取文章
    writeBlogs: "/api/blogs/blog/writeBlogs", //写文章，发布
    getBlogDetail: "/api/blogs/blog/getBlogDetail", //查看文章
}

/**
 * 获取文章
 * @param {Object} data 
 */
export const getBlogs = (data)=>{
    return request.get(API.getBlogs, data)
}

/**
 * 写文章发布
 * @param {Object} data 
 */
export const writeBlogs = (data)=>{
    return request.post(API.writeBlogs, data)
}

/**
 * 查看文章
 * @param {Object} data 
 */
export const getBlogDetail = (data)=>{
    return request.get(API.getBlogDetail, data)
}