import logo from "../dota2/logo.png";
import sj from "../dota2/sj-item.png";
import gg from "../dota2/gg-item.png";
import puck from "../dota2/puck-item.png";
import { useState, useEffect } from "react";
import {
  Form,
  Modal,
  Tooltip,
  Button,
  Tabs,
  Space,
  Input,
  Badge,
  Checkbox,
} from "antd";
import { LockOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { showLoginModal, hideLoginModal } from "../store/actionTypes";
import { Link } from "react-router-dom";

const { TabPane } = Tabs;
interface IProps {
  loginModalVisible: boolean;
  showLoginModal: () => void;
  hideLoginModal: () => void;
}

const Header: React.FC<IProps> = ({
  loginModalVisible,
  showLoginModal,
  hideLoginModal,
}) => {
  const showModal = () => {
    showLoginModal();
  };

  const handleCancel = () => {
    hideLoginModal();
  };

  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});
  const onFinish = (values: any) => {
    console.log("Finish:", values);
  };
  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({});
  }, []);

  return (
    <>
      <div className="app-header">
        <div className="app-header-left">
          <Link
            to="/"
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <img src={logo} alt="dota2" className="app-logo" />
          </Link>
          <div className="menu">
            <Space size="middle">
              <Tooltip placement="bottom" title="物品" className="tooltip">
                <Link to="/equipment" className="menu-item">
                  <img src={sj} alt="sj" style={{ width: "80%" }} />
                </Link>
              </Tooltip>
              <Tooltip placement="bottom" title="英雄" className="tooltip">
                <Link to="/heros" className="menu-item">
                  <img src={gg} alt="gg" style={{ width: "80%" }} />
                </Link>
              </Tooltip>
              <Tooltip placement="bottom" title="搞笑锦集" className="tooltip">
                <Link to="/funny" className="menu-item">
                  <img src={puck} alt="puck" style={{ width: "80%" }} />
                </Link>
              </Tooltip>
            </Space>
          </div>

          <Input
            placeholder="输入英雄/物品/比赛"
            suffix={<SearchOutlined />}
            className="header-search font-mono"
          />
        </div>
        <div className="header-right">
          <div onClick={showModal}>
            <Tooltip placement="bottom" title="登录账号" className="tooltip">
              <Badge
                dot
                style={{
                  boxShadow: "0 0 0 .6rem red",
                  top: "5.5rem",
                  right: "5.5rem",
                }}
              >
                <UserOutlined className="header-account" />
              </Badge>
            </Tooltip>
          </div>

          <Modal
            visible={loginModalVisible}
            closable={false}
            footer={null}
            onCancel={handleCancel}
            style={{ maxWidth: "400rem" }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  padding: "20rem 0 30rem 0",
                }}
              >
                <img
                  src={logo}
                  alt="logo"
                  style={{ width: "100rem", height: "100rem" }}
                />
              </div>
              <Tabs defaultActiveKey="1">
                <TabPane tab="登录" key="1">
                  <Form form={form} name="horizontal_login" onFinish={onFinish}>
                    <Form.Item name="username">
                      <Input
                        prefix={
                          <UserOutlined className="site-form-item-icon" />
                        }
                        placeholder="Username"
                      />
                    </Form.Item>
                    <Form.Item name="password">
                      <Input
                        prefix={
                          <LockOutlined className="site-form-item-icon" />
                        }
                        type="password"
                        placeholder="Password"
                      />
                    </Form.Item>
                    <Form.Item>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Checkbox>记住我</Checkbox>
                        <a href="/" className="forget-pwd">
                          忘记密码
                        </a>
                      </div>
                    </Form.Item>
                    <Form.Item shouldUpdate>
                      {() => (
                        <Button
                          type="primary"
                          htmlType="submit"
                          style={{ width: "100%" }}
                        >
                          登录
                        </Button>
                      )}
                    </Form.Item>
                  </Form>
                </TabPane>
                <TabPane tab="注册" key="2">
                  Content of Tab Pane 2
                </TabPane>
                <TabPane tab="忘记密码" key="3">
                  Content of Tab Pane 3
                </TabPane>
              </Tabs>
            </div>
          </Modal>
        </div>
        <div className="header-notification">
          <Tooltip title="消息通知" placement="bottom">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </Tooltip>
        </div>
      </div>
    </>
  );
};

interface State {
  loginModal: {
    visible: boolean;
  };
}

export default connect(
  (state: State) => ({
    loginModalVisible: state.loginModal.visible,
  }),
  {
    showLoginModal,
    hideLoginModal,
  }
)(Header);
