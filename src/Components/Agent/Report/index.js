import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";

import Header from "../../../CommonComponents/Header";
import "./Report.scss";
import { useNavigate } from "react-router-dom";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import Button from "@material-ui/core/Button";
import FooterMenu from "../../../CommonComponents/FooterMenu";

const AgentReport = (props) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const redirect = (url) => {
    navigate(url);
  };

  const gameReducer = useSelector((state) => ({
    userDetail: state.gameReducer.userDetail,
  }));

  useEffect(() => {
    if (gameReducer.userDetail) {
      setName(gameReducer.userDetail.name);
    }
  },[gameReducer.userDetail]);

  return (
    <div className="agent_layout">
      <Header name={"Agent Report"} />
      <div className="agent_body">
        <div className="sub_header">
          <span className="sub_header_text">Agent</span>
          <span className="sub_header_text">{name}</span>
        </div>
        <ValidatorForm
          className="input_form_box"
          // onSubmit={() => addUser()}
          autoComplete="off"
        >
          <div className="input_form_box_inner">
            <div className="input_form">
              <span className="input_box_text">Enter Start Date</span>
              <TextValidator
                validators={["required"]}
                errorMessages={["this field is required"]}
                variant="outlined"
                size="small"
                type="date"
                className="input_box"
              />
            </div>
            <div className="input_form">
              <span className="input_box_text">Enter End Date</span>
              <TextValidator
                validators={["required"]}
                errorMessages={["this field is required"]}
                variant="outlined"
                size="small"
                type="date"
                className="input_box"
              />
            </div>

            <div className="input_form">
              <span className="input_box_text black">Number of Days = 7</span>
            </div>

            <div className="input_form">
              <span className="input_box_text">Optional (Enter Label)</span>
              <TextValidator
                variant="outlined"
                size="small"
                type="text"
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


export default AgentReport;
