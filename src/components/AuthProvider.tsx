import React, { useEffect, createContext, useContext, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { userinfo } from "../api/auth";
import { showLoginModal } from "../store/actionTypes";
import { removeRememberMe } from "../utils/remember_me";
import { getToken, removeToken } from "../utils/token";

export interface User {
  id: number;
  avatarUrlId: number;
  avatarUrl: string;
  name: string;
  note?: string;
  intro?: string;
  fansNum?: number | null;
  followerNum?: number | null;
  likeNum?: number | null;
  backgroundImgId?: number | null;
  backgroundImg?: string | null;
}

const fakeAuth = {
  isLogin: false,
  user: {
    id: 0,
    avatarUrlId: 0,
    avatarUrl: "",
    name: "",
  },
  setAuthUser(user: User) {},
  signin(cb?: () => void) {},
  signout(cb?: () => void) {},
};

const authContext = createContext<{
  isLogin: boolean;
  user: User;
  setAuthUser: (user: User) => void;
  signin: (cb?: () => void) => void;
  signout: (cb?: () => void) => void;
}>(fakeAuth);

export function useAuth() {
  return useContext(authContext);
}

function useProvideAuth(showLoginModal: () => void) {
  const [user, setUser] = useState<User>(fakeAuth.user);
  const [isLogin, setIsLogin] = useState<boolean>(!!getToken());
  let h = useHistory();

  const setAuthUser = (user: User) => {
    setUser(user);
    if (user.id !== 0) {
      setIsLogin(true);
    }
  };

  const signin = (cb?: () => void) => {
    setIsLogin(true);

    async function asyncLogin() {
      try {
        const {
          data: { data },
        } = await userinfo();
        let u = {
          id: data.id,
          avatarUrlId: data.avatar_id,
          avatarUrl: data.avatar,
          name: data.name,
          note: data.note,
          intro: data.intro,
          backgroundImgId: data.background_image_id,
          backgroundImg: data.background_image,
        };
        setUser(u);
        if (cb) {
          cb()
        }
      } catch (e) {
        signout(() => {
          showLoginModal();
          h.push("/");
        });
      }
    }

    asyncLogin();
  };

  const signout = (cb?: () => void) => {
    setIsLogin(false);
    setUser(fakeAuth.user);
    removeToken();
    removeRememberMe();
    cb ? cb() : h.push("/");
  };

  return {
    isLogin,
    user,
    setAuthUser,
    signin,
    signout,
  };
}

const AuthProvider: React.FC<{
  showLoginModal: () => void;
}> = ({ children, showLoginModal }) => {
  const auth = useProvideAuth(showLoginModal);
  console.log("AuthProvider render");
  useEffect(() => {
    let token = getToken();
    if (auth.user.id === 0 && token) {
      auth.signin(() => {});
    }
  }, [auth]);

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export default connect(() => ({}), { showLoginModal })(AuthProvider);
