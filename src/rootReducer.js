import { combineReducers } from "redux";
import baiduReducer from "./redux/reducer/baiduReducer";

//通过redux的combineReducers方法 将所有reducer合成
export default combineReducers({
  baiduReducer,
});
