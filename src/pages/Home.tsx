import { Skeleton, Card, Row, Col, Button, Space } from "antd";
import { LogoutOutlined, EditOutlined } from "@ant-design/icons";
import { useHistory } from "react-router";
import jugg from "../dota2/hero-jugg.jpeg";
import luna from "../dota2/hero-luna.jpeg";
import yemo from "../dota2/hero-ym.jpeg";
import houzi from "../dota2/hero-hz.jpeg";
import xuemo from "../dota2/hero-xm.jpeg";

import homepage from "../dota2/sf.jpeg";
import ItemList, { cardItem } from "../components/ItemList";
import { TopAvatar, TopMenu } from "./UserCenter";
import Contact from "../components/Contact";
import { useAuth } from "../components/AuthProvider";

const HomeAuth: React.FC = () => {
  const { signout: logout, user } = useAuth();
  const h = useHistory();
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
              style={{ backgroundImage: `url(${homepage})` }}
            />

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
              {!user.name ? (
                <Skeleton.Input
                  style={{
                    width: "100rem",
                    marginBottom: "6rem",
                    marginTop: "3rem",
                    borderRadius: "3rem",
                    height: "16rem",
                  }}
                  active
                  size="small"
                />
              ) : (
                <span className="author-name">{user.name}</span>
              )}

              {!user?.note ? (
                <Skeleton.Input
                  style={{
                    width: "250rem",
                    borderRadius: "3rem",
                    height: "15rem",
                  }}
                  active
                  size="small"
                />
              ) : (
                <span className="author-desc">{user?.note}</span>
              )}
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
                    onClick={() =>
                      logout(() => {
                        h.push("/");
                      })
                    }
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

export default HomeAuth;
