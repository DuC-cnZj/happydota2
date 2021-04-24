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
    background_image: string;
  };
}

export function userinfo() {
  return ajax.post<UserInfo>("/api/userinfo");
}

interface RefreshTokenResponse {
  code: number;
  expire: string;
  token: string;
}

export function refreshToken() {
  return ajax.get<RefreshTokenResponse>("/api/refresh_token");
}

export function updateUser({
  name,
  intro,
  avatar,
  backgroundImage,
}: {
  name: string;
  intro?: string;
  avatar: string;
  backgroundImage?: string;
}) {
  return ajax.post<UserInfo>("/api/update_userinfo", {
    name,
    intro,
    avatar,
    background_image: backgroundImage,
  });
}
