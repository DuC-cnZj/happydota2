import React from "react";

import { UserOutlined, HomeOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import { Link } from "react-router-dom";
import puck from "../dota2/puck-item.png";
import gg from "../dota2/gg-item.png";
import sj from "../dota2/sj-item.png";
import { useAuth } from "../components/AuthProvider";

const Footer: React.FC = () => {
  const { user } = useAuth();
  return (
    <>
      <div className="footer-md">dota2 刀圈欢乐多 by duc @2021.</div>
      <div className="footer-sm container">
        <div className="footer-item">
          <Tooltip placement="bottom" title="主页" className="tooltip">
            <Link to="/" className="footer-menu-item">
              <HomeOutlined />
            </Link>
          </Tooltip>
        </div>
        <div className="footer-item">
          <Tooltip placement="top" title="物品" className="tooltip">
            <Link to="/equipment" className="footer-menu-item">
              <img src={sj} alt="sj" style={{ width: "80%" }} />
            </Link>
          </Tooltip>
        </div>
        <div className="footer-item">
          <Tooltip placement="top" title="英雄" className="tooltip">
            <Link to="/heros" className="footer-menu-item">
              <img src={gg} alt="gg" style={{ width: "80%" }} />
            </Link>
          </Tooltip>
        </div>
        <div className="footer-item">
          <Tooltip placement="top" title="搞笑锦集" className="tooltip">
            <Link to="/funny" className="footer-menu-item">
              <img src={puck} alt="puck" style={{ width: "80%" }} />
            </Link>
          </Tooltip>
        </div>
        <div className="footer-item">
          <Tooltip placement="top" title="用户" className="tooltip">
            <Link to={`/users/${user.name}`} className="footer-menu-item">
              <UserOutlined />
            </Link>
          </Tooltip>
        </div>
      </div>
    </>
  );
};

export default Footer;
