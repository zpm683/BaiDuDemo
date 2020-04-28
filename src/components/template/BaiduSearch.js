import React from "react";
//导入配置文件
import { baiDuSearchUrl } from "../../config/url";

//BaiduSearch组件
export default function BaiduSearch(props) {
  //构造方法
  const [inputStr, setInputStr] = React.useState("");

  //格式检查
  function checkSearchTextIsOK() {
    if (inputStr == "") {
      alert("请输入检索内容!");
      return false;
    } else {
      return true;
    }
  }
  //点击事件
  function doBaidu() {
    if (!checkSearchTextIsOK()) return;
    //发起action
    props.doActions.toSearch();
  }

  //键盘事件
  function keypress(e) {
    //非Enter
    if (e.which !== 13) return;
    //Enter
    if (!checkSearchTextIsOK()) return;
    //拼接检索链接
    let searchUrl = baiDuSearchUrl + inputStr;
    //跳转
    window.location.href = searchUrl;
  }

  //渲染UI
  return (
    <div className="row justify-content-center form-inline">
      <input
        className="form-control col-md-6 inputData"
        type="text"
        value={inputStr}
        onChange={(e) => setInputStr(e.target.value)}
        onKeyPress={(e) => keypress(e)}
        defaultValue=""
        autoFocus
      />
      <button
        className="btn btn-primary pull-right"
        type="button"
        onClick={(e)=> doBaidu()}
      >
        百度一下
      </button>
    </div>
  );
}
