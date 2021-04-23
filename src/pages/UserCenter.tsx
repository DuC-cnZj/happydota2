import {
  Card,
  Divider,
  Button,
  Upload,
  Row,
  Col,
  Form,
  Input,
  message,
  Modal,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
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
import { getToken } from "../utils/token";
import { logout } from "../store/actionTypes";

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
  return <img className="avatar" src={avatar} alt="avatar" />;
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
          <p className="author-name">{user.name}</p>
          <span className="author-desc">{user.description}</span>
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
            <p className="author-name">{user.name}</p>
            <span className="author-desc">{user.description}</span>
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

const UserSetting: React.FC<{ user: User }> = memo(({ user }) => {
  const [form] = Form.useForm();

  const myRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (myRef && myRef.current) {
      myRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [myRef]);

  const onFinish = (values: any) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Row style={{ width: "100%" }} className="container" ref={myRef}>
      <Col md={18} sm={24} xs={24}>
        <Card title="修改个人资料" bordered={false} style={{ width: "100%" }}>
          <Form
            initialValues={{
              name: user.name,
              intro: user.description ? user.description : "暂无签名",
            }}
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 10 }}
            form={form}
            name="control-hooks"
            onFinish={onFinish}
          >
            <Form.Item name="name" label="昵称" wrapperCol={{ span: 6 }}>
              <Input />
            </Form.Item>
            <Form.Item name="intro" label="个性签名" wrapperCol={{ span: 6 }}>
              <Input />
            </Form.Item>
            <Form.Item name="avatar" label="头像上传" wrapperCol={{ span: 6 }}>
              <UploadAvatarConnector />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 4, span: 10 }}>
              <Button
                type="primary"
                htmlType="submit"
                style={{ marginRight: "5rem" }}
              >
                Submit
              </Button>
              <Button htmlType="button" onClick={onReset}>
                Reset
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
});

interface UploadAvatarProps {
  value?: string;
  onChange?: (value: string) => void;
  logout: () => void;
}

const UploadAvatar: React.FC<UploadAvatarProps> = ({
  value,
  onChange,
  logout,
}) => {
  const [previewVisible, setPreviewVisible] = useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState<string | undefined>(value);
  const handleCancel = () => setPreviewVisible(false);
  let h = useHistory();

  const [fileList, setFileList] = useState<any[]>([]);

  const triggerChange = (path: string) => {
    onChange?.(path);
  };

  const beforeUpload = (file: any) => {
    const isJpgOrPng =
      file.type === "image/jpeg" ||
      file.type === "image/png" ||
      file.type === "image/gif";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };

  const handleChange = ({ fileList, file }: { file: any; fileList: any[] }) => {
    setFileList(fileList);
    if (file.status === "done") {
      triggerChange(file.response.data.path);
    }
    if (file.status === "error") {
      if (file.response.code === 401) {
        message.error("登录过期, 请重新登录");
        setTimeout(() => {
          logout();
          h.push("/");
        }, 1000);
      }
    }
    if (file.status === "removed") {
      triggerChange("");
    }
  };

  const handlePreview = async (file: any) => {
    setPreviewVisible(true);
    setPreviewImage(file.response.data.path);
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <>
      <Upload
        beforeUpload={beforeUpload}
        action={process.env.REACT_APP_BASE_URL + "/api/upload"}
        listType="picture-card"
        fileList={fileList}
        maxCount={1}
        onPreview={handlePreview}
        onChange={handleChange}
        headers={{ Authorization: "Bearer " + getToken() }}
      >
        {fileList.length >= 1 ? null : uploadButton}
      </Upload>
      <Modal
        width={600}
        visible={previewVisible}
        title="预览"
        footer={null}
        onCancel={handleCancel}
      >
        <img alt="example" style={{ width: "100%" }} src={previewImage} />
      </Modal>
    </>
  );
};

const UploadAvatarConnector = connect(() => ({}), {
  logout: logout,
})(UploadAvatar);

const UserSettingConnector = connect(
  (state: { user: User }) => ({ user: state.user }),
  {}
)(UserSetting);
