import { Button } from "@material-ui/core";
import React from "react";
import Header from "../Header";
import MainHeader from "../MainHeader";
import PageNotSpotted from "../PageNotSpotted";

import "./AddDisplayname.scss";

const AddDisplayname = () => {
  return (
    <div>
      <div className="display_name">
        <MainHeader name="Display Name" />
        <div className="display_name_inner">
          <div className="display_name_info">
            <span className="password_text">Current Display Name</span>
            <span className="info_text">player_displayname</span>
          </div>
        </div>

        <div className="display_name-div">
          <div className="display_name_inner1">
            <span className="info_text">Enter New Display Name</span>
            <input
              id="name"
              type="text"
              name="name"
              className="input_box"
              placeholder="player_displayname"
              // value={loginDetails.name}
              // onChange={handleChange}
            />

            <span className="info_text1">
              Take note all players’ Display name are not unique Name
            </span>
          </div>
          <Button variant="contained" className="login_btn">
            Apply
          </Button>
        </div>
      </div>
      <PageNotSpotted />
    </div>
  );
};

export default AddDisplayname;
