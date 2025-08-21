import { Button } from "@material-ui/core";
import React from "react";
import Header from "../Header";
import MainHeader from "../MainHeader";
import PageNotSpotted from "../PageNotSpotted";

import "./ChangePassword.scss";

const ChangePassword = () => {
  return (
    <div>
      <div className="change_password">
        <MainHeader name="Change Password" />
        <div className="change_password_inner">
          <div className="change_password_info">
            <span className="password_text">Change Password</span>
            <span className="info_text">
              Please change the password if this is your first time signing in
              this account and you have not changed the password before.
            </span>
            <Button className="change_password_btn">Change Password</Button>
          </div>
          <div className="change_password_info">
            <span className="info_text">
              Please skip if you have previously signed in this account and you
              have changed the password.
            </span>
            <Button className="change_password_btn">Skip</Button>
          </div>
        </div>
      </div>
      <PageNotSpotted />
    </div>
  );
};

export default ChangePassword;
