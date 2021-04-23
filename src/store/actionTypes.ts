import { User } from "./reducers/user";
import { userinfo } from "../api/auth";
import { Dispatch } from "redux";
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

export const fetchUserInfo = () => (dispatch: Dispatch) => {
    userinfo().then(res=>{
        dispatch(login({
            id: res.data.data.id,
            avatarUrl: res.data.data.avatar,
            name: res.data.data.name,
            description: res.data.data.intro,
            fansNum: 0,
            followerNum: 0,
            likeNum: 0,
            backgroundImg: "",
            isLogin: true,
        }))
    })
};
