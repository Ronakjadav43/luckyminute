import { Button } from "@material-ui/core";
import React from "react";
import Header from "../Header";
import MainHeader from "../MainHeader";
import PageNotSpotted from "../PageNotSpotted";

import "./ResetPassword.scss";

const ResetPassword = () => {
  return (
    <div>
      <div className="reset-password">
        <MainHeader name="Change Password" />
        <div className="reset-password_inner">
          <div className="reset-password_info">
            <span className="password_text">Important Notice</span>
            <span className="info_text">
              There is no “forget password” service.
              <br />
              So your account will not be able to recover if you lose your
              password.
              <br />
              Please set a password that you can remember.
            </span>
          </div>
        </div>

        <div className="reset-password-div">
          <input
            id="name"
            type="text"
            name="name"
            className="input_box"
            placeholder="New Password"
            // value={loginDetails.name}
            // onChange={handleChange}
          />
          <input
            id="password"
            type="password"
            name="password"
            className="input_box"
            placeholder="Confirm Password"
            // value={loginDetails.password}
            // onChange={handleChange}
          />
          <Button variant="contained" className="login_btn">
            Apply
          </Button>
        </div>
      </div>
      <PageNotSpotted />
    </div>
  );
};

export default ResetPassword;
