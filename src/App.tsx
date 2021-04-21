import React, { createContext } from "react";
import { Layout } from "antd";
import MyHeader from "./components/MyHeader";
import MyFooter from "./pages/Footer";
import MyHome from "./pages/Home";
import Equipment from "./pages/Equipment";
import UserCenter from "./pages/UserCenter";
import { Switch, Route } from "react-router-dom";
import MyError from "./components/MyError";
import AuthRoute from "./router/AuthRoute";
import { LoginState, User } from "./store/reducers/user";
import { connect } from "react-redux";
import Notification from "./components/Notification";
import Detail from "./components/Detail";

const { Header, Content, Footer } = Layout;

export const authContext = createContext<LoginState>({ isLogin: false });

const App: React.FC<{ user: User & LoginState }> = ({ user }) => {
  return (
    <authContext.Provider value={user}>
      <Layout>
        <Header className="ant-header">
          <MyHeader />
        </Header>
        <Content className="content">
          <Switch>
            <Route path="/" exact component={MyHome} />
            <Route path="/equipment" component={Equipment} />
            <Route path="/detail" component={Detail} />
            <AuthRoute path="/users/:name">
              <UserCenter />
            </AuthRoute>
            <AuthRoute path="/account/notification">
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
  (state: { user: User & LoginState }) => ({ user: state.user }),
  {}
)(App);
