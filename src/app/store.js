import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";

// 配置store
export const store = configureStore({
  reducer: rootReducer,
});
