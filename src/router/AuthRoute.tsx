import React, { useContext } from "react";
import { connect } from "react-redux";
import { Redirect, Route, RouteProps, useHistory } from "react-router-dom";
import { User } from "../store/reducers/user";
import { authContext } from "../App";
import { getToken, removeToken } from "../utils/token";
import { login as loginAction } from "../store/actionTypes";
import { userinfo } from "../api/auth";

const AuthRoute: React.FC<RouteProps & { login: (user: User) => void }> = ({
  children,
  login,
  ...rest
}) => {
  const context = useContext<User>(authContext);
  let h = useHistory();
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
        h.push("/", { showLogin: true });
      });
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        token ? (
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

export default connect(() => ({}), { login: loginAction })(AuthRoute);
