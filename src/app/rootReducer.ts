/**
 * root-reducer
 * @see https://redux.js.org/
 */
import { combineReducers } from "@reduxjs/toolkit";
import { baiduReducer } from "./redux/slice";

export const rootReducer = combineReducers({
  baidu: baiduReducer,
  // TODO:add Reducer
});
