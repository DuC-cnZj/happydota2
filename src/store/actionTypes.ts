import { User } from "./reducers/user";
import { userinfo } from "../api/auth";
import { Dispatch } from "redux";
export const SHOW_LOGIN_MODAL = "SHOW_LOGIN_MODAL";
export const HIDE_LOGIN_MODAL = "HIDE_LOGIN_MODAL";

export const AUTH_USER = "AUTH_USER";
export const LOGIN = "LOGIN";
export const UPDATE_INFO = "UPDATE_INFO";
export const LOGOUT = "LOGOUT";

export const showLoginModal = () => ({ type: SHOW_LOGIN_MODAL });
export const hideLoginModal = () => ({ type: HIDE_LOGIN_MODAL });

export const authUser = () => ({ type: AUTH_USER });
export const login = (user: User) => ({ type: LOGIN, state: user });
export const updateUserinfo = (user: User) => ({ type: UPDATE_INFO, state: user });
export const logout = () => ({ type: LOGOUT });

export const fetchUserInfo = () => (dispatch: Dispatch) => {
  userinfo().then((res) => {
    const { data } = res.data;
    dispatch(
      login({
        id: data.id,
        avatarUrl: data.avatar,
        name: data.name,
        description: data.intro,
        fansNum: 0,
        followerNum: 0,
        likeNum: 0,
        backgroundImg: data.background_image,
        isLogin: true,
      })
    );
  });
};
