import { Input, Button } from "antd";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { showLoginModal, login } from "../store/actionTypes";
import ta from "../dota2/ta.jpeg";
import st from "../dota2/st.jpeg";

import { User } from "../store/reducers/user";
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
          id: 0,
        avatarUrl: ta,
        name: "duc",
        description: "这个人很懒，什么都没留下",
        fansNum: 666,
        followerNum: 100,
        likeNum: 10000,
        backgroundImg: st,
        isLogin: true,
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


interface StateImp {
  from?: Location;
  showLogin?: boolean;
}

interface State extends HomeState {
  loginModal: {
    visible: boolean;
  };
}

interface HomeState {
  user: User;
}

const HomeGuestConnect = connect((state: State) => ({}), {
  showLoginModal,
  login,
})(HomeGuest);

export default HomeGuestConnect
