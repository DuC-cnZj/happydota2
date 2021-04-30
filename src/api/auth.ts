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
    note: string;
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

interface HistoryAvatars {
  code: number;
  page: number;
  page_size: number;
  total: number;
  data: {
    id: number;
    path: string;
  }[];
}

export function historyAvatars({ pageSize = 15, page = 1 }) {
  return ajax.get<HistoryAvatars>(
    `/api/history_avatars?page=${page}&page_size=${pageSize}`
  );
}
export function historyBackgroundImages({ pageSize = 15, page = 1 }) {
  return ajax.get<HistoryAvatars>(
    `/api/history_background_images?page=${page}&page_size=${pageSize}`
  );
}

export function updateUser({
  name,
  intro,
  note,
  avatarId,
  backgroundImageId,
}: {
  name: string;
  intro?: string;
  note?: string;
  avatarId: number;
  backgroundImageId?: number;
}) {
  return ajax.post<UserInfo>("/api/update_userinfo", {
    name,
    intro,
    note,
    avatar_id: avatarId,
    background_image_id: backgroundImageId,
  });
}
