import * as TYPES from "../actions/ActionTypes";
//初始化
const initState = {
  count: 0,
};
//Reducer
export default function baiduReducer(state = initState, action) {
  switch (action.type) {
    case TYPES.TO_SEARCH:
       let nextCount = state.count +1;
      return { ...state, count: nextCount };
      
    default:
      return state;
  }
}
