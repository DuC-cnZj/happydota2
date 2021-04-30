import React from "react";

const Contact: React.FC = () => (
  <div>
    <ul className="contact">
      <li className="contact-item">
        <a href="/">社区规则</a>
      </li>
      <li className="contact-item">
        <a href="/">关于我们</a>
      </li>
      <li className="contact-item">
        <a href="/">开发日志</a>
      </li>
      <li className="contact-item">
        <a href="/">评价规则</a>
      </li>
      <li className="contact-item">
        <a href="/">联系我们</a>
      </li>
      <li className="contact-item">
        <a href="/">使用条款与协议</a>
      </li>
    </ul>
    <span className="copyright-text">© 2021 刀圈欢乐多</span>
  </div>
);

export default Contact;
