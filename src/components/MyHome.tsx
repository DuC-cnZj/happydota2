import { Input, Button } from "antd";
import { connect } from "react-redux";
import { showLoginModal } from "../store/actionTypes";

interface IProps {
  showLoginModal: () => void;
}

const Home: React.FC<IProps> = ({ showLoginModal }) => {
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
          <Button type="primary" style={{ marginRight: "10rem" }}>
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

interface State {
  loginModal: {
    visible: boolean;
  };
}

export default connect((state: State) => ({}), {
  showLoginModal,
})(Home);
