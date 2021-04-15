import React from "react";
import { Layout } from "antd";
import MyHeader from './components/MyHeader'
import MyHome from './components/MyHome'

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <>
      <Layout>
        <Header className="ant-header">
          <MyHeader/>
        </Header>
        <Content className="content">
          <MyHome/>
        </Content>
        <Footer className="footer">
            dota2 刀圈欢乐多 by duc @2021.
        </Footer>
      </Layout>
    </>
  );
}

export default App;
