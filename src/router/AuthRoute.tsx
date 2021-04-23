import React, { useEffect, useContext } from "react";
import { connect } from "react-redux";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { User } from "../store/reducers/user";
import { authContext } from "../App";
import { getToken, removeToken } from "../utils/token";
import {
  fetchUserInfo,
  login as loginAction,
  showLoginModal,
} from "../store/actionTypes";
import { userinfo } from "../api/auth";

const AuthRoute: React.FC<
  RouteProps & {
    login: (user: User) => void;
    fetchUserInfo: () => void;
    showLoginModal: () => void;
  }
> = ({ children, login, fetchUserInfo, showLoginModal, ...rest }) => {
  const context = useContext<User>(authContext);

  useEffect(() => {
    let token = getToken();

    if (context.id === 0 && token) {
      userinfo()
        .then((res) => {
          login({
            id: res.data.data.id,
            avatarUrl: res.data.data.avatar,
            name: res.data.data.name,
            description: res.data.data.intro,
            fansNum: 0,
            followerNum: 0,
            likeNum: 0,
            backgroundImg: "",
            isLogin: true,
          });
        })
        .catch((e) => {
          removeToken();
        });
    }
  }, []);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        context.id ? (
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
