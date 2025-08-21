import React from "react";
import Header from "../../../../CommonComponents/Header";
import "./Report.scss";
import { useNavigate, useParams } from "react-router-dom";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import Button from "@material-ui/core/Button";
import FooterMenu from "../../../../CommonComponents/FooterMenu";

const Report = (props) => {
  const { userName } = useParams();
  const navigate = useNavigate();
  const redirect = (url) => {
    navigate(url);
  };
  return (
    <div className="agent_layout">
      <Header name={"Player Report"} />
      <div className="agent_body">
        <div className="sub_header">
          <span className="sub_header_text">Player</span>
          <span className="sub_header_text">{userName}</span>
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

export default Report;
