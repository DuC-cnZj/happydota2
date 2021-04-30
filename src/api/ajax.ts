import axios from "axios";
import { isRememberMeSet } from "../utils/remember_me";
import { getToken, removeToken, setToken } from "../utils/token";
import { refreshToken } from "./auth";

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
  (config) => {
    config.headers.Authorization = getToken();

    // 在发送请求之前做些什么
    console.log("在发送请求之前做些什么", config.url);
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    console.log("对请求错误做些什么");
    return Promise.reject(error);
  }
);

// 添加响应拦截器
ajax.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    console.log("对响应数据做点什么");
    console.log(response);
    return response;
  },
  (error) => {
    console.log(error.response);
    if (
      error.response.status === 401 &&
      getToken() &&
      isRememberMeSet() &&
      error.response.config.url !== "/api/refresh_token"
    ) {
      return doRefresh(error);
    }
    // 对响应错误做点什么
    console.log("对响应错误做点什么");
    return Promise.reject(error);
  }
);

export interface ErrorResponse {
  code: number;
  message: string;
}

export default ajax;

async function doRefresh(error: any) {
  try {
    const res = await refreshToken().then((res) => {
      setToken(res.data.token);
      return doRequest(error);
    });
    return res;
  } catch (e) {
    removeToken();
    return Promise.reject(e);
  }
}

async function doRequest(error: any) {
  const { config } = error.response;

  config.headers.Authorization = getToken();

  const res = await axios.request(config);

  return res;
}
