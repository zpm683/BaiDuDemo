import React, { useState } from "react";
import { baiDuSearchUrl } from "../config/url";
import { useDispatch } from "react-redux";
import { addCount } from "../redux/slice";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
/**
 * BaiduSearch组件
 */
export const BaiduSearch = (props) => {
  const [inputStr, setInputStr] = useState("");
  const dispatch = useDispatch();

  //格式检查
  const checkSearchTextIsOK = () => {
    if (inputStr === "") {
      alert("请输入检索内容!");
      return false;
    } else {
      return true;
    }
  };

  //点击事件
  const onClickBtn = () => {
    if (!checkSearchTextIsOK()) return;
    //发起action
    dispatch(addCount());
  };

  //键盘事件
  const onKeypress = (e) => {
    //非Enter
    if (e.which !== 13) return;
    //Enter
    if (!checkSearchTextIsOK()) return;
    //拼接检索链接
    let searchUrl = baiDuSearchUrl + inputStr;
    //跳转
    window.location.href = searchUrl;
  };

  //渲染UI
  return (
    <Grid container justify="center">
      <TextField
        type="text"
        value={inputStr}
        onChange={(e) => setInputStr(e.target.value)}
        onKeyPress={onKeypress}
        variant="outlined"
        autoFocus
      />
      <Button variant="contained" color="primary" onClick={onClickBtn}>
        百度一下
      </Button>
    </Grid>
  );
};
