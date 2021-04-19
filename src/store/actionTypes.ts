import { User } from "./reducers/user";
export const SHOW_LOGIN_MODAL = "SHOW_LOGIN_MODAL";
export const HIDE_LOGIN_MODAL = "HIDE_LOGIN_MODAL";

export const AUTH_USER = "AUTH_USER";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const showLoginModal = () => ({ type: SHOW_LOGIN_MODAL });
export const hideLoginModal = () => ({ type: HIDE_LOGIN_MODAL });

export const authUser = () => ({ type: AUTH_USER });
export const login = (user: User) => ({ type: LOGIN, state: user });
export const logout = () => ({ type: LOGOUT });
