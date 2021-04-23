import React, { createContext } from "react";
import { Layout } from "antd";
import MyHeader from "./components/MyHeader";
import MyFooter from "./pages/Footer";
import MyHome from "./pages/Home";
import Welcome from "./pages/Welcome";
import Equipment from "./pages/Equipment";
import UserCenter from "./pages/UserCenter";
import { Switch, Route } from "react-router-dom";
import MyError from "./components/MyError";
import AuthRoute from "./router/AuthRoute";
import { initState, User } from "./store/reducers/user";
import { connect } from "react-redux";
import Notification from "./components/Notification";
import Detail from "./components/Detail";

const { Header, Content, Footer } = Layout;

export const authContext = createContext<User>(initState);

const App: React.FC<{ user: User }> = ({ user }) => {
  return (
    <authContext.Provider value={user}>
      <Layout>
        <Header className="ant-header">
          <MyHeader />
        </Header>
        <Content className="content">
          <Switch>
            <Route path="/" exact component={Welcome} />
            <AuthRoute path="/home" exact>
              <MyHome />
            </AuthRoute>
            <Route path="/equipment" component={Equipment} exact />
            <Route path="/detail" component={Detail} exact />
            <AuthRoute path={["/users/:name", "/users/"]}>
              <UserCenter />
            </AuthRoute>
            <AuthRoute path="/account/notification" exact>
              <Notification />
            </AuthRoute>
            <Route path="*" component={() => <MyError code={404} />} />
          </Switch>
        </Content>
        <Footer className="footer">
          <MyFooter />
        </Footer>
      </Layout>
    </authContext.Provider>
  );
};

export default connect(
  (state: { user: User }) => ({ user: state.user }),
  {}
)(App);
