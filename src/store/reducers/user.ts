import { AUTH_USER, LOGIN, LOGOUT } from "./../actionTypes";

export interface LoginState {
  isLogin: boolean;
}
export interface User {
  avatarUrl: string;
  name: string;
  description?: string;
  fansNum: number | null;
  followerNum: number | null;
  likeNum: number | null;
  backgroundImg: string | null;
}

const initState: User | LoginState = {
  avatarUrl: "",
  name: "",
  description: "这个人很懒，什么都没留下",
  fansNum: null,
  followerNum: null,
  likeNum: null,
  isLogin: false,
};

export default function setUser(
  state = initState,
  action: { type: string; state?: User }
) {
  switch (action.type) {
    case LOGIN:
      return { ...state, ...action.state, isLogin: true };
    case AUTH_USER:
      return state;
    case LOGOUT:
      return initState;
    default:
      return state;
  }
}
