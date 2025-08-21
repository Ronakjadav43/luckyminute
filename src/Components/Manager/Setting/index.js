import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as UserAction from "../../../Actions/User";
import FooterManager from "../../../CommonComponents/FooterManager";


import Header from "../../../CommonComponents/Header";
import "./Setting.scss";

const ManagerSetting = (props) => {
  const navigate = useNavigate();
  const redirect = (url) => {
    navigate(url);
  };

  const gameReducer = useSelector((state) => ({
    token: state.gameReducer.token
  }));

  useEffect(() => {
    if (gameReducer.token == null) {
      navigate("/Login");
    }
  }, [gameReducer.token]);


  const logout = () => {
    props.actions.userAction.logout();
  };

  return (
    <div className="agent_layout">
      <Header name={"Setting"} />
      <div className="agent_body">
        <div className="game_details_box">
          <div className="game_details_box_inner center">
            <div className="details_box_btn border_1 w_70" onClick={() => redirect("Language")}>
              <span className="btn_text wheat ">Language</span>
            </div>
          </div>
          <div className="game_details_box_inner center">
            <div className="details_box_btn border_1 w_70" onClick={() => redirect("AdminChangepassword")}>
              <span className="btn_text wheat ">Change Password</span>
            </div>
          </div>
          <div className="game_details_box_inner center">
            <div className="details_box_btn border_1 w_70" onClick={() => logout()}>
              <span className="btn_text wheat ">Logout</span>
            </div>
          </div>
        </div>
      </div>
      <FooterManager />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  actions: {
    userAction: bindActionCreators(UserAction, dispatch),
  },
});

export default connect(null, mapDispatchToProps)(ManagerSetting);
