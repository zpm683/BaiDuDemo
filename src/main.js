import React from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { Provider } from "react-redux";
//导入store
import store from "./store";
import { BaiDuPage } from "./components/pages/Baidu";
//定义根组件
const App = (
  <Provider store={store}>
    <BaiDuPage />
  </Provider>
);
//挂载根组件
render(App, document.getElementById("app"));
