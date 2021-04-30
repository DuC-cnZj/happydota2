import React, { lazy, Suspense } from "react";
import { Layout } from "antd";
import { Switch, Route } from "react-router-dom";
import MyHeader from "./components/MyHeader";
import MyError from "./components/MyError";
import AuthRoute from "./router/AuthRoute";
import Notification from "./components/Notification";
import AuthProvider from "./components/AuthProvider";

const Equipment = lazy(() => import("./pages/Equipment"));
const MyFooter = lazy(() => import("./pages/Footer"));
const MyHome = lazy(() => import("./pages/Home"));
const Welcome = lazy(() => import("./pages/Welcome"));
const UserCenter = lazy(() => import("./pages/UserCenter"));
const Detail = lazy(() => import("./pages/Detail"));

const { Header, Content, Footer } = Layout;

const App: React.FC = () => (
  <AuthProvider>
    <Suspense fallback={<div>Loading...</div>}>
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
            <Route path="/detail" exact>
              <Detail />
            </Route>
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
    </Suspense>
  </AuthProvider>
);

export default App;
