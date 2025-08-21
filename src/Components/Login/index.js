/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "./Login.scss";
import * as UserAction from "../../Actions/User";
import Notification from "../../CommonComponents/Notification";
import PageNotSpotted from "../../CommonComponents/PageNotSpotted";
import Loader from "../../CommonComponents/Loader";
import { UserType } from "../../Utils";
import { Button } from "@material-ui/core";

const Login = (props) => {
  const navigate = useNavigate();
  const [loginDetails, setLoginDetails] = useState({
    name: "",
    password: "",
  });
  const [internalMsg, setInternalMsg] = useState(null);

  const gameReducer = useSelector((state) => ({
    token: state.gameReducer.token,
    loading: state.gameReducer.loading,
    userDetail: state.gameReducer.userDetail,
  }));

  useEffect(() => {
    if (gameReducer.token && gameReducer.token != null) {
      props.actions.userAction.getUserDetails();
    }
  }, [gameReducer.token]);

  useEffect(() => {
    if (gameReducer.userDetail) {
      const userRole = gameReducer.userDetail.role;
      if (userRole === UserType.AGENT) {
        navigate("/Agent");
      } else if (userRole === UserType.MANAGER) {
        navigate("/Manager");
      } else {
        navigate("/");
      }
    }
  }, [gameReducer.userDetail]);

  const handleChange = (event) => {
    const field = event.target.name;
    let commonData = { ...loginDetails };
    commonData[field] = event.target.value;
    return setLoginDetails(commonData);
  };

  const login = () => {
    setInternalMsg(null);
    if (loginDetails.name && loginDetails.password) {
      props.actions.userAction.login(loginDetails);
    } else {
      setInternalMsg({
        message: "Invalid UserName and Password",
      });
    }
  };

  return (
    <div>
      <Notification internalMsg={internalMsg} />
      <div className="login">
        <div className="luckyminute">
          <span className="luckyminute_text">
            Lucky <span>Minute</span>
          </span>
          <span className="luckyminute_text">
            幸运<span>1分</span>
          </span>
        </div>
        <img className="profile_pic" src="/img/Logo.svg" alt="login" />
        <div className="login_div">
          <input
            id="name"
            type="text"
            name="name"
            className="input_box"
            placeholder="User ID"
            value={loginDetails.name}
            onChange={handleChange}
          />
          <input
            id="password"
            type="password"
            name="password"
            className="input_box"
            placeholder="password"
            value={loginDetails.password}
            onChange={handleChange}
          />
          <Button variant="contained" className="login_btn" onClick={login}>
            Sign In
          </Button>
        </div>
        {gameReducer.loading && <Loader />}
      </div>
      <PageNotSpotted />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  actions: {
    userAction: bindActionCreators(UserAction, dispatch),
  },
});

export default connect(null, mapDispatchToProps)(Login);
