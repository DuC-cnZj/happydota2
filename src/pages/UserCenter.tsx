import { Tabs, Card, Divider, Button, Row, Col } from "antd";
import { NavLink } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
const { TabPane } = Tabs;

const UserCenter: React.FC = () => {
  let { path, url } = useRouteMatch();

  return (
    <>
      <div className="user-center">
        <div
          className="user-top-bg"
          style={{
            backgroundImage:
              "url('http://dicetower.oss-cn-heyuan.aliyuncs.com/mod/6042637db2d6e3001de64077/202103192104407.jpg')",
          }}
        ></div>

        <img
          className="avatar"
          src="https://file.dicecho.com/media/20210329/08582482.jpg"
          alt="avatar"
        />
        <p className="author-name">Catko</p>
        <span className="author-desc">我头像真可爱</span>
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
        <Button type="ghost" className="follow">
          关注
        </Button>

        <div className="author-tabs">
          <NavLink to={`${url}/home`} activeClassName="author-tab-active">
            <span>主页</span>
          </NavLink>
          <NavLink to={`${url}/comments`} activeClassName="author-tab-active">
            <span>评论</span>
          </NavLink>
          <NavLink to={`${url}/posts`} activeClassName="author-tab-active">
            <span>帖子</span>
          </NavLink>
        </div>

        <Row
          style={{ width: "100%" }}
          gutter={[16, 16]}
          className="container user-body"
        >
          <Col xs={{span: 24, order: 2}} md={{span: 18, order: 1}}>
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
          <Col xs={{span: 24, order: 1}} md={{span: 6, order: 2}}>
            <Card title="简介" bordered={false} style={{ width: "100%" }}>
                西部森林中隐藏了无数的秘密。其中之一就是受到风神眷顾的森林弓箭大师莱瑞蕾。风行者莱瑞蕾的家人在她出生那夜的暴风雨中全部去世了，狂风摧毁了他们的房屋，一切都化为乌有。只有还是婴儿的风行者在充满死亡和破坏的瓦屑中幸存了下来。暴风雨平静下来后，自然之风注意到了这个在草地中哭泣的幸运儿。风很怜悯这个孩子，便将她抬起，放到一户邻居的门前台阶上。之后的岁月里，风会时不时回来看下这个孩子的生活，从远处看着她磨练自己的技术。现在，经过多年的训练，风行者射出的箭矢百步穿杨。她迅捷的步伐让人难以看清，犹如背后有风在推动。风行者用飓风般的箭矢群杀戮敌人，她几乎已成为自然之力本身。
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default UserCenter;
