import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { bindActionCreators } from "redux";

import Header from "../../../../CommonComponents/Header";
import * as UserAction from "../../../../Actions/User";
import "./UserDetail.scss";
import FooterManager from "../../../../CommonComponents/FooterManager";
import EditIcon from '@material-ui/icons/Edit';

const AgentDetail = (props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const { userName } = useParams();

  const gameReducer = useSelector((state) => ({
    users: state.gameReducer.users,
  }));

  useEffect(() => {
    if (gameReducer.users.length > 0) {
      const user = gameReducer.users.find(
        (singleUser) => singleUser.user.name === userName
      );
      if (user) setUser(user);
      else navigate("/User");
    }
  }, [gameReducer.users]);

  const redirect = (url) => {
    navigate(url);
  };

  return (
    <div>
      <div className="agent_layout">
        <Header name={"Agent Profile"} />
        {user && (
          <div className="agent_body">
            <div className="row_details">
              <div className="row_details_inner">
                <span className="row_details_text">User Name</span>
                <span className="row_details_text">{user.user.name}</span>
              </div>

              <div className="row_details_inner">
                <span className="row_details_text">Display Name</span>
                <span className="row_details_text">{user.user.displayName}</span>
              </div>

              <div className="row_details_inner">
                <span className="row_details_text">Detail <EditIcon onClick={() => redirect("Details")} /></span>
                <span className="row_details_text">{user.detail}</span>
              </div>

              <div className="row_details_inner">
                <span className="row_details_text">Label <EditIcon onClick={() => redirect("Label")} /></span>
                <span className="row_details_text">
                  {user.user.labels.length ? user.user.labels[1] : ""}
                </span>
              </div>

            </div>
            <div className="game_details_box">
              <div className="game_details_box_inner">
                <div className="details_box_btn border_1" onClick={() => redirect("DepositCredit")}>
                  <span className="btn_text wheat ">Deposit Credit</span>
                </div>
                <div className="details_box_btn border_1" onClick={() => redirect("WithdrawCredit")}>
                  <span className="btn_text wheat ">Withdraw Credit</span>
                </div>
              </div>

              <div className="game_details_box_inner">
                <div className="details_box_btn border_1" onClick={() => redirect("Transaction")}>
                  <span className="btn_text wheat ">Transaction</span>
                </div>
                <div className="details_box_btn border_1" onClick={() => redirect("Message")}>
                  <span className="btn_text wheat ">Message</span>
                </div>
              </div>

              <div className="game_details_box_inner">
                <div className="details_box_btn border_1" onClick={() => redirect("Report")}>
                  <span className="btn_text wheat ">Report</span>
                </div>
                <div className="details_box_btn border_1">
                  <span className="btn_text wheat ">Reset Password</span>
                </div>
              </div>
            </div>
          </div>
        )}
        <FooterManager />
      </div>










    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  actions: {
    userAction: bindActionCreators(UserAction, dispatch),
  },
});

export default connect(null, mapDispatchToProps)(AgentDetail);
