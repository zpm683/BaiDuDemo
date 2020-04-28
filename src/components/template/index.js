import React from "react";
import { BaiduLogo } from "../template/BaiduLogo";
import BaiduSearch from "../template/BaiduSearch";
import "../pages/Baidu.css";

export default (props) => {
  return (
    <div className="container">
      <BaiduLogo />
      <BaiduSearch {...props} />
      <div className="show">
        <h5>检索次数: {props.data.count}</h5>
      </div>
    </div>
  );
};
