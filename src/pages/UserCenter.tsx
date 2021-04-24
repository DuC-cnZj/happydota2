import {
  Card,
  Divider,
  Button,
  Row,
  Col,
  Form,
  Input,
  message,
  Skeleton,
} from "antd";
import { connect } from "react-redux";
import {
  NavLink,
  Route,
  Switch,
  useHistory,
  useParams,
} from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import { User } from "../store/reducers/user";
import { useEffect, useState, useRef, memo } from "react";
import { logout, updateUserinfo } from "../store/actionTypes";
import { updateUser } from "../api/auth";
import UploadImage from "../components/Upload";

const HomePage: React.FC = () => {
  return (
    <>
      <Row
        style={{ width: "100%" }}
        gutter={[16, 16]}
        className="container user-body"
      >
        <Col xs={{ span: 24, order: 2 }} md={{ span: 18, order: 1 }}>
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
        <Col xs={{ span: 24, order: 1 }} md={{ span: 6, order: 2 }}>
          <Card title="简介" bordered={false} style={{ width: "100%" }}>
            西部森林中隐藏了无数的秘密。其中之一就是受到风神眷顾的森林弓箭大师莱瑞蕾。风行者莱瑞蕾的家人在她出生那夜的暴风雨中全部去世了，狂风摧毁了他们的房屋，一切都化为乌有。只有还是婴儿的风行者在充满死亡和破坏的瓦屑中幸存了下来。暴风雨平静下来后，自然之风注意到了这个在草地中哭泣的幸运儿。风很怜悯这个孩子，便将她抬起，放到一户邻居的门前台阶上。之后的岁月里，风会时不时回来看下这个孩子的生活，从远处看着她磨练自己的技术。现在，经过多年的训练，风行者射出的箭矢百步穿杨。她迅捷的步伐让人难以看清，犹如背后有风在推动。风行者用飓风般的箭矢群杀戮敌人，她几乎已成为自然之力本身。
          </Card>
        </Col>
      </Row>
    </>
  );
};

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

interface IProps {
  user: User;
}

const UserCenter: React.FC<IProps> = ({ user }) => {
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
          {!user?.description ? (
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
            <span className="author-desc">{user?.description}</span>
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
              <p>
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
              </p>
            ) : (
              <p className="author-name">{user.name}</p>
            )}

            {!user?.description ? (
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
              <span className="author-desc">{user?.description}</span>
            )}
          </div>
          <TopTabs />
        </div>

        <Switch>
          <Route path={`${url}`} exact component={HomePage} />
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

export default connect(
  (state: { user: User }) => ({ user: state.user }),
  {}
)(UserCenter);

const UserSetting: React.FC<{
  user: User;
  updateUserinfoAction: (user: User) => void;
}> = memo(({ user, updateUserinfoAction }) => {
  const [form] = Form.useForm();
  const [userInput, setUserInput] = useState<{
    name: string;
    description?: string;
  }>({
    name: user.name,
    description: user.description ? user.description : "暂无签名",
  });

  const myRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (myRef && myRef.current) {
      myRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [myRef]);

  useEffect(() => {
    setUserInput({ name: user.name, description: user.description });
  }, [user.name, user.description]);

  const onFinish = (values: any) => {
    console.log(values);
    updateUser({
      name: values.name,
      intro: values.description,
      avatarId: values.avatarId ? values.avatarId : user.avatarUrlId,
      backgroundImageId: values.backgroundId,
    }).then((res) => {
      const { data } = res.data;
      updateUserinfoAction({
        id: data.id,
        avatarUrlId: data.avatar_id,
        avatarUrl: data.avatar,
        name: data.name,
        description: data.intro,
        backgroundImgId: data.background_image_id,
        backgroundImg: data.background_image,
        isLogin: true,
      });
      message.success("更新成功");
    });
  };

  const onReset = () => {
    form.resetFields();
    setUserInput({ name: user.name, description: user.description });
  };

  const valuesChange = (v: any) => {
    console.log(v);
    setUserInput({ ...userInput, ...v });
  };
  console.log(user);
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
                avatarId: user.avatarUrlId,
                backgroundId: user.backgroundImgId,
                description: user.description ? user.description : "暂无签名",
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
              <Form.Item
                name="description"
                label="个性签名"
                wrapperCol={{ span: 10 }}
              >
                <Input />
              </Form.Item>
              <Form.Item label="头像上传" wrapperCol={{ span: 18 }}>
                <UploadAvatarConnector
                  name={userInput.name}
                  description={userInput.description}
                  avatarUrl={user.avatarUrl}
                  backgroundImage={user.backgroundImg ? user.backgroundImg : ""}
                />
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

interface UploadAvatarProps {
  value?: string;
  avatarUrl: string;
  name: string;
  description?: string;
  backgroundImage?: string;
  onChange?: (value: string) => void;
  logout: () => void;
}

const UploadAvatar: React.FC<UploadAvatarProps> = ({
  value,
  onChange,
  logout,
  avatarUrl,
  name,
  description,
  backgroundImage,
}) => {
  const [previewVisible, setPreviewVisible] = useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState<string | undefined>(
    backgroundImage
  );
  const [avatar, setAvatar] = useState<string>(avatarUrl);
  const [avatarVisible, setAvatarVisible] = useState<boolean>(false);

  return (
    <Row gutter={[16, 16]}>
      <Col sm={24} md={18}>
        <Preview
          image={previewImage ? previewImage : backgroundImage}
          name={name}
          description={description}
          avatar={avatar ? avatar : avatarUrl}
        />
      </Col>
      <Col sm={24} md={6}>
        <div>
          <Form.Item name="backgroundId">
            <UploadImage
              logout={logout}
              previewImage={previewImage}
              setPreviewImage={setPreviewImage}
              previewVisible={previewVisible}
              setPreviewVisible={setPreviewVisible}
            />
          </Form.Item>
          <Form.Item name="avatarId">
            <UploadImage
              logout={logout}
              previewImage={avatar}
              setPreviewImage={setAvatar}
              previewVisible={avatarVisible}
              setPreviewVisible={setAvatarVisible}
            />
          </Form.Item>
        </div>
      </Col>
    </Row>
  );
};

const Preview: React.FC<{
  image: string | undefined;
  avatar: string;
  name: string;
  description?: string;
}> = ({ image, avatar, name, description }) => {
  return (
    <>
      <div
        className="preview"
        style={{
          backgroundImage: `url(${image})`,
        }}
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
            {description ? (
              <span style={{ fontSize: "12rem" }}>{description}</span>
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

const UploadAvatarConnector = connect(
  (state: { user: User }) => ({ user: state.user }),
  {
    logout: logout,
  }
)(UploadAvatar);

const UserSettingConnector = connect(
  (state: { user: User }) => ({ user: state.user }),
  { updateUserinfoAction: updateUserinfo }
)(UserSetting);
