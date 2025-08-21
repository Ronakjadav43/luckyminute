import React from "react";
import { useParams } from "react-router-dom";

import Header from "../../../../CommonComponents/Header";
import "./Label.scss";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import Button from "@material-ui/core/Button";
import FooterMenu from "../../../../CommonComponents/FooterMenu";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";

const Label = (props) => {
  const { userName } = useParams();

  return (
    <div className="agent_layout">
      <Header name={"Label"} />
      <div className="agent_body">
        <div className="sub_header">
          <span className="sub_header_text">Player</span>
          <span className="sub_header_text">{userName}</span>
        </div>

        <div className="label_list">
          <div className="label">
            <span className="label_text">VIP</span>
            <DeleteOutlineOutlinedIcon />
          </div>
          <div className="label">
            <span className="label_text">New</span>
            <DeleteOutlineOutlinedIcon />
          </div>
          <div className="label">
            <span className="label_text">VIP</span>
            <DeleteOutlineOutlinedIcon />
          </div>
          <div className="label">
            <span className="label_text">New</span>
            <DeleteOutlineOutlinedIcon />
          </div>
        </div>

        <ValidatorForm
          className="input_form_box"
          // onSubmit={() => submit()}
          autoComplete="off"
        >
          <div className="input_form_box_inner">
            <div className="input_form">
              <span className="input_box_text">Enter Label</span>
              <TextValidator
                validators={["required"]}
                errorMessages={["this field is required"]}
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

export default Label;
