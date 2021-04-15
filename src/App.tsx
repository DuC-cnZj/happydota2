import React from "react";
import { Layout } from "antd";
import MyHeader from "./components/MyHeader";
import MyHome from "./components/MyHome";
import { Switch, Route } from "react-router-dom";
import NotFound from "./components/NotFound";

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
            <Route path="*" component={NotFound} />
          </Switch>
        </Content>
        <Footer className="footer">dota2 刀圈欢乐多 by duc @2021.</Footer>
      </Layout>
    </>
  );
}

export default App;
