import { removeToken } from "../../utils/token";
import { AUTH_USER, LOGIN, LOGOUT } from "./../actionTypes";

export interface User {
  id: number;
  avatarUrl: string;
  name: string;
  description?: string;
  fansNum: number | null;
  followerNum: number | null;
  likeNum: number | null;
  backgroundImg: string | null;
  isLogin: boolean;
}

export const initState: User = {
  id: 0,
  avatarUrl: "",
  name: "",
  description: "这个人很懒，什么都没留下",
  fansNum: null,
  followerNum: null,
  likeNum: null,
  backgroundImg: "",
  isLogin: false,
};

export default function setUser(
  state = initState,
  action: { type: string; state?: User }
) {
  switch (action.type) {
    case LOGIN:
      console.log("set user")
      return { ...state, ...action.state, isLogin: true };
    case AUTH_USER:
      return state;
    case LOGOUT:
      removeToken();
      return initState;
    default:
      return state;
  }
}
