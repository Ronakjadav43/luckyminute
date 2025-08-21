import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";

import "./HomeManager.scss";
import "@fontsource/inter";
import Loader from "../../CommonComponents/Loader";
import Notification from "../../CommonComponents/Notification";
import * as UserAction from "../../Actions/User";
import FooterManager from "../../CommonComponents/FooterManager";

const HomeManager = (props) => {
  const navigate = useNavigate();

  const gameReducer = useSelector((state) => ({
    token: state.gameReducer.token,
    loading: state.gameReducer.loading,
    userDetail: state.gameReducer.userDetail,
  }));

  useEffect(() => {
    if (gameReducer.token && gameReducer.token != null) {
      props.actions.userAction.getUserDetails();
    } else {
      navigate("/Login");
    }
  }, [gameReducer.token]);

  useEffect(() => {
    if (gameReducer.userDetail) {
      props.actions.userAction.getUserBalanceAndMessages();
    }
  }, [gameReducer.userDetail]);

  return (
    <div className="main_layouts">
      <Notification />
      <Outlet />
      {/* <FooterManager /> */}
      {gameReducer.loading && <Loader />}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  actions: {
    userAction: bindActionCreators(UserAction, dispatch),
  },
});

export default connect(null, mapDispatchToProps)(HomeManager);
