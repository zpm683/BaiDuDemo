import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//导入 doAction
import * as actions from "../../redux/actions/actionCreater";
//导入 UI组件
import Baidu from "../template";
//暴露data并绑定baiduHomePageReducer
const mapStateToProps = (state) => ({
  data: state.baiduReducer,
});
//暴露doActions并绑定baiduHomePageActions中的所有方法
const mapDispatchToProps = (dispatch) => ({
  doActions: bindActionCreators(actions, dispatch),
});
//把data,doActions连接给BaiduHomePage组件
export const BaiDuPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Baidu);
