import React from "react";
import img from "../dota2/404-two.png";

interface status {
  code: number;
}

const MyError: React.FC<status> = ({ code }) => (
  <div className="my-error">
    <img src={img} alt={`'${code}'`} />
    <div className="my-error-title">
      <h1>{code}</h1>
    </div>
  </div>
);

export default MyError;
