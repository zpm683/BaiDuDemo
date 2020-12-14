import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// 初始状态
const initialState = {
  count: 0,
};

// Slice
const baiduSlice = createSlice({
  name: "baidu",
  initialState,
  reducers: {
    /** TO_SEARCH action */
    addCount(state, action: PayloadAction<undefined>) {
      state.count = state.count + 1;
    },
  },
});

// Count命中器
export const selectCount = (state: RootState) => state.baidu.count;

// 导出 action
export const { addCount } = baiduSlice.actions;
// 导出 reducer
export const baiduReducer = baiduSlice.reducer;
