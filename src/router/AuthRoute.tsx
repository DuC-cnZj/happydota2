import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { useAuth } from "../components/AuthProvider";

const AuthRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  console.log("auth route render");
  const { isLogin } = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLogin ? (
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

export default AuthRoute;
