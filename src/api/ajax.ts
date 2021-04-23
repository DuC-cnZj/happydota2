import axios from "axios";
import { getToken } from "../utils/token";

const ajax = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 1000,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Accept-Language": "zh",
  },
});

// 添加请求拦截器
ajax.interceptors.request.use(
  function (config) {
    config.headers["Authorization"] = "Bearer " + getToken();

    // 在发送请求之前做些什么
    console.log("在发送请求之前做些什么", config.url);
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    console.log("对请求错误做些什么");
    return Promise.reject(error);
  }
);

// 添加响应拦截器
ajax.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    console.log("对响应数据做点什么");
    return response;
  },
  function (error) {
    // 对响应错误做点什么
    console.log("对响应错误做点什么");
    return Promise.reject(error.response.data as ErrorResponse);
  }
);

export interface ErrorResponse {
  code: number;
  message: string;
}

export default ajax;
