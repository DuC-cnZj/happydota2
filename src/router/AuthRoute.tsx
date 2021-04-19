import React, { useContext } from "react";
import { connect } from "react-redux";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { LoginState } from "../store/reducers/user";
import { authContext } from "../App";

const AuthRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const context = useContext<LoginState>(authContext);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        context.isLogin ? (
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

export default connect(
  (state: { user: LoginState }) => ({ isLogin: state.user.isLogin }),
  {}
)(AuthRoute);
