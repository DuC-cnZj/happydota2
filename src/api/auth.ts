import ajax from "./ajax";

export interface LoginResponse {
  code: number;
  expire: string;
  token: string;
}

export function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  return ajax.post<LoginResponse>("/api/login", { email, password });
}

export interface UserInfo {
  data: {
    id: number;
    email: string;
    name: string;
    avatar: string;
    intro: string;
  };
}

export function userinfo() {
  return ajax.post<UserInfo>("/api/userinfo");
}
