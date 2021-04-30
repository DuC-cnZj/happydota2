import { Input, Button } from "antd";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { showLoginModal } from "../store/actionTypes";
import { useAuth } from "../components/AuthProvider";

interface IProps {
  showLoginModal: () => void;
}

const HomeGuest: React.FC<IProps> = ({ showLoginModal }) => {
  const location = useLocation<StateImp>();
  const { isLogin } = useAuth();
  const h = useHistory();
  useEffect(() => {
    if (isLogin) {
      h.push("/home");
    }
  }, [h, isLogin]);

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

interface StateImp {
  from?: Location;
  showLogin?: boolean;
}

interface State {
  loginModal: {
    visible: boolean;
  };
}

const HomeGuestConnect = connect((state: State) => ({}), {
  showLoginModal,
})(HomeGuest);

export default HomeGuestConnect;
