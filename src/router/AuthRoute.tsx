import React, { useEffect, useContext } from "react";
import { connect } from "react-redux";
import { Redirect, Route, RouteProps, useHistory } from "react-router-dom";
import { User } from "../store/reducers/user";
import { authContext } from "../App";
import { getToken, removeToken } from "../utils/token";
import {
  fetchUserInfo,
  login as loginAction,
  showLoginModal,
} from "../store/actionTypes";
import { userinfo } from "../api/auth";
import { message } from "antd";

const AuthRoute: React.FC<
  RouteProps & {
    login: (user: User) => void;
    fetchUserInfo: () => void;
    showLoginModal: () => void;
  }
> = ({ children, login, fetchUserInfo, showLoginModal, ...rest }) => {
  const context = useContext<User>(authContext);
  let h = useHistory();

  useEffect(() => {
    if (context.id === 0 && getToken()) {
      userinfo()
        .then((res) => {
          login({
            id: res.data.data.id,
            avatarUrlId: res.data.data.avatar_id,
            avatarUrl: res.data.data.avatar,
            name: res.data.data.name,
            intro: res.data.data.intro,
            note: res.data.data.note,
            fansNum: 0,
            followerNum: 0,
            likeNum: 0,
            backgroundImg: res.data.data.background_image,
            backgroundImgId: res.data.data.background_image_id,
            isLogin: true,
          });
        })
        .catch((e) => {
          removeToken();
          message.error("登录过期")
          setTimeout(() => {
            h.push("/", { showLogin: true });
          }, 1000);
        });
    }
  }, [context.id, login, h]);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        getToken() || context.id ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location, showLogin: true },
            }}
          />
        )
      }
    />
  );
};

export default connect(() => ({}), {
  login: loginAction,
  showLoginModal,
  fetchUserInfo,
})(AuthRoute);
