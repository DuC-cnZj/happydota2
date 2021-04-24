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
    avatar_id: number;
    intro: string;
    background_image: string;
    background_image_id: number;
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
  avatarId,
  backgroundImageId,
}: {
  name: string;
  intro?: string;
  avatarId: number;
  backgroundImageId?: number;
}) {
  return ajax.post<UserInfo>("/api/update_userinfo", {
    name,
    intro,
    avatar_id: avatarId,
    background_image_id: backgroundImageId,
  });
}
