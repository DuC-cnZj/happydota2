import React from "react";
import { Layout } from "antd";
import MyHeader from "./components/MyHeader";
import MyFooter from "./pages/Footer";
import MyHome from "./pages/Home";
import Equipment from "./pages/Equipment";
import UserCenter from "./pages/UserCenter";
import { Switch, Route } from "react-router-dom";
import MyError from "./components/MyError";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <>
      <Layout>
        <Header className="ant-header">
          <MyHeader />
        </Header>
        <Content className="content">
          <Switch>
            <Route path="/" exact component={MyHome} />
            <Route path="/equipment" component={Equipment} />
            <Route path="/user" component={UserCenter} />
            <Route path="*" component={() => <MyError code={404} />} />
          </Switch>
        </Content>
        <Footer className="footer">
          <MyFooter />
        </Footer>
      </Layout>
    </>
  );
}

export default App;
