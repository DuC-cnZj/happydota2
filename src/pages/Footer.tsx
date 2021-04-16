import sj from "../dota2/sj-item.png";
import { UserOutlined, HomeOutlined } from "@ant-design/icons";
import gg from "../dota2/gg-item.png";
import puck from "../dota2/puck-item.png";
import { Tooltip } from "antd";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <>
      <div className="footer-md">dota2 刀圈欢乐多 by duc @2021.</div>
      <div className="footer-sm container">
        <div className="footer-item">
          <Tooltip placement="bottom" title="home" className="tooltip">
            <Link to="/" className="menu-item">
              <HomeOutlined />
            </Link>
          </Tooltip>
        </div>
        <div className="footer-item">
          <Tooltip placement="bottom" title="物品" className="tooltip">
            <Link to="/equipment" className="menu-item">
              <img src={sj} alt="sj" style={{ width: "80%" }} />
            </Link>
          </Tooltip>
        </div>
        <div className="footer-item">
          <Tooltip placement="bottom" title="英雄" className="tooltip">
            <Link to="/heros" className="menu-item">
              <img src={gg} alt="gg" style={{ width: "80%" }} />
            </Link>
          </Tooltip>
        </div>
        <div className="footer-item">
          <Tooltip placement="bottom" title="搞笑锦集" className="tooltip">
            <Link to="/funny" className="menu-item">
              <img src={puck} alt="puck" style={{ width: "80%" }} />
            </Link>
          </Tooltip>
        </div>
        <div className="footer-item">
          <Tooltip placement="bottom" title="user" className="tooltip">
            <Link to="/user" className="menu-item">
              <UserOutlined />
            </Link>
          </Tooltip>
        </div>
      </div>
    </>
  );
};
export default Footer;
