import { Card, Row, Col, Input, Button, Space } from "antd";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { showLoginModal, login, logout } from "../store/actionTypes";
import jugg from "../dota2/hero-jugg.jpeg";
import luna from "../dota2/hero-luna.jpeg";
import yemo from "../dota2/hero-ym.jpeg";
import houzi from "../dota2/hero-hz.jpeg";
import xuemo from "../dota2/hero-xm.jpeg";
import ta from "../dota2/ta.jpeg";
import st from "../dota2/st.jpeg";

import homepage from "../dota2/sf.jpeg";
import ItemList, { cardItem } from "../components/ItemList";
import { TopAvatar, TopMenu } from "./UserCenter";
import { LogoutOutlined, EditOutlined } from "@ant-design/icons";
import Contact from "../components/Contact";
import { LoginState, User } from "../store/reducers/user";
import { useLocation } from "react-router";

interface IProps {
  showLoginModal: () => void;
  login: (user: User) => void;
}

const HomeGuest: React.FC<IProps> = ({ showLoginModal, login }) => {
  let location = useLocation<StateImp>();

  useEffect(() => {
    if (location.state?.showLogin) {
      showLoginModal();
    }
  }, [location.state?.showLogin, showLoginModal]);

  const [loading, setLoading] = useState<boolean>(false);

  const joinNow: () => void = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      login({
        avatarUrl: ta,
        name: "duc",
        description: "这个人很懒，什么都没留下",
        fansNum: 666,
        followerNum: 100,
        likeNum: 10000,
        backgroundImg: st,
      });
    }, 2000);
  };

  return (
    <div className="app-home">
      <div className="container app-home-body">
        <div className="titles">
          <span className="title-1">刀圈欢乐多</span>
          <span className="title-2">dota2 玩家聚集地</span>
          <span className="title-3">长鞭在手，天下我有</span>
        </div>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Input
            placeholder="输入您的email"
            className="home-search font-mono"
          />
        </div>
        <div className="home-join">
          <Button
            type="primary"
            style={{ marginRight: "10rem" }}
            loading={loading}
            onClick={() => joinNow()}
          >
            立刻加入
          </Button>
          <Button
            type="ghost"
            className="my-ghost"
            onClick={() => showLoginModal()}
          >
            已有账号，立即登录
          </Button>
        </div>
      </div>
    </div>
  );
};

interface HomeAuthIProps {
  user: User;
  logout: () => void;
}

const HomeAuth: React.FC<HomeAuthIProps> = ({ user, logout }) => {
  const data: cardItem[] = [
    {
      name: "剑圣",
      rate: 3,
      description: "我的刀可以切穿盔甲，切到里面的番茄",
      imgPath: jugg,
    },
    {
      name: "露娜",
      rate: 4,
      description: "夜色下的天空更加开阔",
      imgPath: luna,
    },
    {
      name: "暗夜魔王",
      rate: 4,
      description: "恐惧使魔法更有效",
      imgPath: yemo,
    },
    {
      name: "幻影长矛手",
      rate: 5,
      description: "把你抓走真是一点问题都没有啊",
      imgPath: houzi,
    },
    {
      name: "血魔",
      rate: 2,
      description: "开始收集鲜血",
      imgPath: xuemo,
    },
    {
      name: "血魔",
      rate: 2,
      description: "开始收集鲜血",
      imgPath: xuemo,
    },
    {
      name: "血魔",
      rate: 2,
      description: "开始收集鲜血",
      imgPath: xuemo,
    },
    {
      name: "血魔",
      rate: 2,
      description: "开始收集鲜血",
      imgPath: xuemo,
    },
    {
      name: "血魔",
      rate: 2,
      description: "开始收集鲜血",
      imgPath: xuemo,
    },
    {
      name: "血魔",
      rate: 2,
      description: "开始收集鲜血",
      imgPath: xuemo,
    },
    {
      name: "血魔",
      rate: 2,
      description: "开始收集鲜血",
      imgPath: xuemo,
    },
  ];
  return (
    <div className="home-auth">
      <div className="container home-auth-body">
        <Row gutter={[16, 16]}>
          <Col md={18} xs={24} sm={24}>
            <div
              className="homepage"
              style={{ backgroundImage: "url(" + homepage + ")" }}
            ></div>

            <div>
              <Card
                title="最新投稿"
                extra={<a href="/">查看更多&gt;&gt;</a>}
                bordered={false}
                style={{ width: "100%" }}
              >
                <div>
                  <ItemList data={data} />
                </div>
              </Card>
            </div>
          </Col>
          <Col md={6} sm={0} xs={0}>
            <div className="home-auth-right">
              <TopAvatar avatar={user.avatarUrl} />
              <span className="author-name">{user.name}</span>
              <span className="author-desc">{user.description}</span>
              <TopMenu />
              <div style={{ width: "100%" }}>
                <Space direction="vertical" style={{ width: "100%" }}>
                  <Button
                    style={{ width: "100%" }}
                    icon={<EditOutlined />}
                    type="ghost"
                  >
                    投稿
                  </Button>
                  <Button
                    style={{ width: "100%" }}
                    icon={<LogoutOutlined />}
                    danger
                    onClick={() => logout()}
                  >
                    登出
                  </Button>
                </Space>
              </div>
              <Contact />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

interface HomeProps {
  user: User & LoginState;
  showLoginModal: () => void;
}

const HomeAuthConnector = connect(
  (state: { user: User }) => ({ user: state.user }),
  { logout: logout }
)(HomeAuth);

interface StateImp {
  from?: Location;
  showLogin?: boolean;
}

const Home: React.FC<HomeProps> = ({ user }) => {
  return user.isLogin ? <HomeAuthConnector /> : <HomeGuestConnect />;
};

interface State extends HomeState {
  loginModal: {
    visible: boolean;
  };
}

interface HomeState {
  user: User & LoginState;
}

const HomeGuestConnect = connect((state: State) => ({}), {
  showLoginModal,
  login,
})(HomeGuest);

export default connect((state: HomeState) => ({ user: state.user }), {})(Home);
