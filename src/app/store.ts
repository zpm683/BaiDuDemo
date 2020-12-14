import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";

// 配置store
export const store = configureStore({
  reducer: rootReducer,
});

/**
 *  store RootState Type
 */
export type RootState = ReturnType<typeof store.getState>;