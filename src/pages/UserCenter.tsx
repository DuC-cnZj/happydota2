import ReactMarkdown from "react-markdown";
import {
  Card,
  Divider,
  Button,
  Row,
  Col,
  Form,
  Input,
  message,
  Popover,
  Skeleton,
} from "antd";
import {
  NavLink,
  Route,
  Switch,
  useHistory,
  useParams,
} from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import { useEffect, useState, useRef, memo } from "react";
import {
  historyAvatars,
  updateUser,
  historyBackgroundImages,
} from "../api/auth";
import UploadImage from "../components/Upload";
import { HistoryOutlined } from "@ant-design/icons";
import PictureSelector from "../components/PictureSelector";
import MyEditor from "../components/MyEditor";
import { useAuth } from "../components/AuthProvider";

const HomePage: React.FC = () => {
  let { user } = useAuth();
  return (
    <>
      <Row
        style={{ width: "100%" }}
        gutter={[16, 16]}
        className="container user-body"
      >
        <Col xs={{ span: 24, order: 2 }} md={{ span: 17, order: 1 }}>
          <Card
            title="评价列表 - 63篇评价"
            bordered={false}
            style={{ width: "100%" }}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
        <Col xs={{ span: 24, order: 1 }} md={{ span: 7, order: 2 }}>
          <Card
            title="简介"
            bordered={false}
            style={{ width: "100%" }}
            className="markdown"
          >
            {user.intro ? <ReactMarkdown>{user.intro}</ReactMarkdown> : ""}
          </Card>
        </Col>
      </Row>
    </>
  );
};

const HomePageConnector = HomePage;

const TopBg: React.FC<{ url: string }> = ({ url }) => {
  return (
    <div
      className="user-top-bg"
      style={
        url
          ? {
              backgroundImage: "url('" + url + "')",
            }
          : {}
      }
    ></div>
  );
};

export const TopMenu: React.FC = () => {
  return (
    <div className="author-menu">
      <div className="author-menu-item">
        <span>24</span>
        <span>粉丝</span>
      </div>
      <Divider type="vertical" plain />

      <div className="author-menu-item">
        <span>27</span>
        <span>关注</span>
      </div>
      <Divider type="vertical" plain />
      <div className="author-menu-item">
        <span>30</span>
        <span>获赞</span>
      </div>
    </div>
  );
};

const TopTabs: React.FC = () => {
  let { url } = useRouteMatch();

  return (
    <div className="author-tabs">
      <NavLink to={`${url}`} exact activeClassName="author-tab-active">
        <span>主页</span>
      </NavLink>
      <NavLink to={`${url}/comments`} activeClassName="author-tab-active">
        <span>评论</span>
      </NavLink>
      <NavLink to={`${url}/posts`} activeClassName="author-tab-active">
        <span>帖子</span>
      </NavLink>
      <NavLink to={`${url}/setting`} activeClassName="author-tab-active">
        <span>设置</span>
      </NavLink>
    </div>
  );
};

export const TopAvatar: React.FC<{ avatar: string }> = ({ avatar }) => {
  return avatar ? (
    <img className="avatar" src={avatar} alt="avatar" />
  ) : (
    <Skeleton.Avatar
      style={{
        width: "90rem",
        height: "90rem",
        marginTop: "20rem",
        marginBottom: "10rem",
      }}
      active
    />
  );
};

const UserCenter: React.FC = () => {
  let { user } = useAuth();
  let { url } = useRouteMatch();
  let { name } = useParams<{ name: string }>();
  let h = useHistory();
  useEffect(() => {
    if (!name) {
      h.push("/", { showLogin: true });
    }
  }, [name, h]);

  return (
    <>
      <div className="user-center" style={{ paddingBottom: "100rem" }}>
        <TopBg url={user.backgroundImg ? user.backgroundImg : ""} />
        <div className="show-md">
          <TopAvatar avatar={user.avatarUrl} />
          {!user.name ? (
            <Skeleton.Input
              style={{
                width: "100rem",
                marginBottom: "25rem",
                borderRadius: "3rem",
              }}
              size="default"
              active
            />
          ) : (
            <p className="author-name">{user.name}</p>
          )}
          {!user?.note ? (
            <Skeleton.Input
              style={{
                width: "250rem",
                marginBottom: "3rem",
                borderRadius: "3rem",
              }}
              active
              size="small"
            />
          ) : (
            <span className="author-desc">{user?.note}</span>
          )}
          <TopMenu />
          {name !== user.name ? (
            <Button
              style={{ fontSize: "12rem" }}
              type="ghost"
              className="follow"
            >
              关注
            </Button>
          ) : (
            <Button
              style={{ fontSize: "12rem" }}
              type="ghost"
              className="follow"
              onClick={() => h.push(`/users/${user.name}/setting`)}
            >
              编辑资料
            </Button>
          )}

          <TopTabs />
        </div>

        <div className="show-sm container">
          <div className="sm-group-am">
            <TopAvatar avatar={user.avatarUrl} />
            <div style={{ width: "100%" }} className="sm-group-tb">
              <TopMenu />
              <Button type="ghost" className="follow">
                关注
              </Button>
            </div>
          </div>
          <div className="text-group">
            {!user.name ? (
              <Skeleton.Input
                style={{
                  width: "100rem",
                  marginBottom: "3rem",
                  marginTop: "7rem",
                  borderRadius: "3rem",
                }}
                active
                size="small"
              />
            ) : (
              <p className="author-name">{user.name}</p>
            )}

            {!user?.note ? (
              <Skeleton.Input
                style={{
                  width: "250rem",
                  marginBottom: "3rem",
                  borderRadius: "3rem",
                  height: "22rem",
                }}
                active
                size="small"
              />
            ) : (
              <span className="author-desc">{user?.note}</span>
            )}
          </div>
          <TopTabs />
        </div>

        <Switch>
          <Route path={`${url}`} exact component={HomePageConnector} />
          <Route
            exact
            path={`${url}/setting`}
            component={UserSettingConnector}
          />
        </Switch>
      </div>
    </>
  );
};

export default UserCenter;

const UserSetting: React.FC = memo(() => {
  const [form] = Form.useForm();
  let { user, setAuthUser: updateUserinfoAction } = useAuth();
  const [userInput, setUserInput] = useState<{
    name: string;
    note?: string;
  }>({
    name: user.name,
    note: user.note ? user.note : "暂无签名",
  });

  const myRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (myRef && myRef.current) {
      myRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [myRef]);

  useEffect(() => {
    setUserInput({
      name: user.name,
      note: user.note,
    });
    setPreviewImage(user.backgroundImg ? user.backgroundImg : "");
    setAvatar(user.avatarUrl);
  }, [user]);

  const onFinish = (values: any) => {
    console.log("onFinish", values);
    updateUser({
      name: values.name,
      intro: values.intro,
      note: values.note,
      avatarId: values.avatar.id ? values.avatar.id : user.avatarUrlId,
      backgroundImageId: values.background.id,
    }).then((res) => {
      const { data } = res.data;
      updateUserinfoAction({
        id: data.id,
        avatarUrlId: data.avatar_id,
        avatarUrl: data.avatar,
        name: data.name,
        note: data.note,
        intro: data.intro,
        backgroundImgId: data.background_image_id,
        backgroundImg: data.background_image,
      });
      message.success("更新成功");
    });
  };

  const onReset = () => {
    form.resetFields();
    setUserInput({
      name: user.name,
      note: user.note,
    });
    setPreviewImage(user?.backgroundImg ? user.backgroundImg : "");
    setAvatar(user.avatarUrl);
  };

  const valuesChange = (v: any) => {
    console.log(v);
    setUserInput({ ...userInput, ...v });
  };
  console.log(user);

  const [previewVisible, setPreviewVisible] = useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState<string | undefined>(
    user?.backgroundImg ? user.backgroundImg : ""
  );
  const [avatar, setAvatar] = useState<string>(user.avatarUrl);
  const [avatarVisible, setAvatarVisible] = useState<boolean>(false);
  const [avatarId, setAvatarId] = useState<number>(user.avatarUrlId);

  return (
    <Row
      style={{ width: "100%" }}
      className="container"
      ref={myRef}
      justify="center"
    >
      <Col md={24} sm={24} lg={20} xs={24}>
        <Card title="修改个人资料" bordered={false} style={{ width: "100%" }}>
          {user.id ? (
            <Form
              onValuesChange={valuesChange}
              initialValues={{
                name: user.name,
                avatar: { id: user.avatarUrlId, url: user.avatarUrl },
                background: {
                  id: user.backgroundImgId,
                  url: user.backgroundImg,
                },
                note: user.note ? user.note : "暂无签名",
                intro: user.intro ? user.intro : "",
              }}
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 10 }}
              form={form}
              name="control-hooks"
              onFinish={onFinish}
            >
              <Form.Item name="name" label="昵称" wrapperCol={{ span: 10 }}>
                <Input />
              </Form.Item>
              <Form.Item name="note" label="个性签名" wrapperCol={{ span: 10 }}>
                <Input />
              </Form.Item>
              <Form.Item label="头像上传" wrapperCol={{ span: 18 }}>
                <Row gutter={[16, 16]}>
                  <Col xs={24} sm={24} md={18}>
                    <Preview
                      image={previewImage}
                      name={userInput.name}
                      note={userInput.note}
                      avatar={avatar}
                    />
                  </Col>
                  <Col sm={24} md={6}>
                    <Row style={{ width: "100%" }} gutter={[16, 16]}>
                      <Col xs={12} sm={12} md={24}>
                        <div style={{ display: "flex" }}>
                          <Form.Item name="background">
                            <UploadImage
                              title="上传背景图"
                              value={{
                                id: user.backgroundImgId
                                  ? user.backgroundImgId
                                  : 0,
                                url: user.backgroundImg
                                  ? user.backgroundImg
                                  : "",
                              }}
                              previewImage={previewImage}
                              setPreviewImage={setPreviewImage}
                              previewVisible={previewVisible}
                              setPreviewVisible={setPreviewVisible}
                            />
                          </Form.Item>
                          <Popover
                            content={
                              <PictureSelector
                                fetch={historyBackgroundImages}
                                onChange={(img) => {
                                  setPreviewImage(img.path);
                                  form.setFieldsValue({
                                    background: { id: img.id, url: img.path },
                                  });
                                }}
                              />
                            }
                            title="历史背景图片"
                            trigger="click"
                          >
                            <Button
                              style={{ flex: "0 0 auto" }}
                              icon={<HistoryOutlined />}
                            ></Button>
                          </Popover>
                        </div>
                      </Col>
                      <Col xs={12} sm={12} md={24}>
                        <div style={{ display: "flex" }}>
                          <Form.Item name="avatar" style={{ display: "flex" }}>
                            <UploadImage
                              title="上传头像"
                              value={{
                                id: avatarId,
                                url: avatar,
                              }}
                              previewImage={avatar}
                              setPreviewImage={setAvatar}
                              previewVisible={avatarVisible}
                              setPreviewVisible={setAvatarVisible}
                            />
                          </Form.Item>
                          <Popover
                            content={
                              <PictureSelector
                                fetch={historyAvatars}
                                onChange={(img) => {
                                  setAvatarId(img.id);
                                  setAvatar(img.path);
                                  form.setFieldsValue({
                                    avatar: { id: img.id, url: img.path },
                                  });
                                }}
                              />
                            }
                            title="历史头像图片"
                            trigger="click"
                          >
                            <Button
                              style={{ flex: "0 0 auto" }}
                              icon={<HistoryOutlined />}
                            ></Button>
                          </Popover>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Form.Item>

              <Form.Item
                name="intro"
                label="个人简介"
                wrapperCol={{ span: 18 }}
              >
                <MyEditor />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 4, span: 10 }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ marginRight: "5rem" }}
                >
                  保存
                </Button>
                <Button htmlType="button" onClick={onReset}>
                  重置
                </Button>
              </Form.Item>
            </Form>
          ) : (
            <></>
          )}
        </Card>
      </Col>
    </Row>
  );
});

const Preview: React.FC<{
  image: string | undefined;
  avatar: string;
  name: string;
  note?: string;
}> = ({ image, avatar, name, note }) => {
  return (
    <>
      <div
        className="preview"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div style={{ width: "100%" }}>
        <div className="preview-bar">
          {avatar ? (
            <img src={avatar} alt="avatar" className="preview-img" />
          ) : (
            <Skeleton.Avatar active className="preview-img" />
          )}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {name ? (
              <span style={{ fontSize: "14rem" }}>{name}</span>
            ) : (
              <span style={{ color: "gray", fontSize: "14rem" }}>
                这里显示昵称
              </span>
            )}
            {note ? (
              <span style={{ fontSize: "12rem" }}>{note}</span>
            ) : (
              <span style={{ color: "gray", fontSize: "14rem" }}>
                这里显示个性签名
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const UserSettingConnector = UserSetting;
