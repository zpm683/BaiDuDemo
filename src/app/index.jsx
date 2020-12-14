import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { BaiduDemo } from "./components";

export const App = () => (
  <Provider store={store}>
    <BaiduDemo />
  </Provider>
);
