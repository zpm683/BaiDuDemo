import { createStore } from "redux";
import rootReducer from "./rootReducer";
//定义store
const store = createStore(rootReducer);
//导出store
export default store;
