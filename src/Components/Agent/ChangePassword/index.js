import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import Header from "../../../CommonComponents/Header";
import * as UserAction from "../../../Actions/User";
import "./AdminChangepassword.scss";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import Button from "@material-ui/core/Button";
import FooterMenu from "../../../CommonComponents/FooterMenu";

const AgentChangePassword = (props) => {
  const [name, setName] = useState("");
  const [data, setData] = useState({
    oldPassword: "",
    newPassword: "",
  });

  const gameReducer = useSelector((state) => ({
    userDetail: state.gameReducer.userDetail,
  }));
  const handleChange = (event) => {
    const field = event.target.name;
    const commonData = { ...data };
    commonData[field] = event.target.value;
    return setData(commonData);
  };

  useEffect(() => {
    if (gameReducer.userDetail) {
      setName(gameReducer.userDetail.name);
    }
  }, [gameReducer.userDetail]);

  const submit = () => {
    props.actions.userAction.changePassword(data);
  };

  return (
    <div className="agent_layout">
      <Header name={"Change Password"} />
      <div className="agent_body">
        <div className="sub_header">
          <span className="sub_header_text">Agent</span>
          <span className="sub_header_text">{name}</span>
        </div>
        <ValidatorForm
          className="input_form_box"
          onSubmit={() => submit()}
          autoComplete="off"
        >
          <div className="input_form_box_inner">
            <div className="input_form">
              <span className="input_box_text">Enter New Password</span>
              <TextValidator
                validators={["required"]}
                errorMessages={["this field is required"]}
                variant="outlined"
                size="small"
                type="password"
                name="oldPassword"
                onChange={handleChange}
                value={data.oldPassword}
                className="input_box"
              />
            </div>
            <div className="input_form">
              <span className="input_box_text">Confirm New Password</span>
              <TextValidator
                validators={["required"]}
                errorMessages={["this field is required"]}
                variant="outlined"
                size="small"
                type="password"
                name="newPassword"
                onChange={handleChange}
                value={data.newPassword}
                className="input_box"
              />
            </div>
          </div>
          <div className="form_btn">
            <Button type="Submit" variant="contained" className="submit_btn">
              Submit
            </Button>
          </div>
        </ValidatorForm>
      </div>
      <FooterMenu />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  actions: {
    userAction: bindActionCreators(UserAction, dispatch),
  },
});

export default connect(null, mapDispatchToProps)(AgentChangePassword);
