import axios from 'axios'
// 基础路径

const instance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 1000,
})

//在请求或响应被 then 或 catch 处理前拦截它们。

  
  // 添加响应拦截器
  instance.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    // 为response加上.data
    return response.data;
  }, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  });
export default instance