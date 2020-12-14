import { createSlice } from "@reduxjs/toolkit";

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
    addCount(state, action) {
      state.count = state.count + 1;
    },
  },
});

// Count命中器
export const selectCount = (state) => state.baidu.count;

// 导出 action
export const { addCount } = baiduSlice.actions;
// 导出 reducer
export const baiduReducer = baiduSlice.reducer;
