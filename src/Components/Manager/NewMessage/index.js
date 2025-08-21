import React from "react";
import Header from "../../../CommonComponents/Header";
import "./NewMessage.scss";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import Button from '@material-ui/core/Button';
import FooterManager from "../../../CommonComponents/FooterManager";

const ManagerNewMessage = (props) => {
  return (
    <div className="agent_layout">
      <Header name={"New Message"} />
      <div className="agent_body">
        <div className="sub_header">
          <span className="sub_header_text">Manager </span>
          <span className="sub_header_text">Hp854876960</span>
        </div>


        <ValidatorForm
          className="input_form_box"
          // onSubmit={() => addUser()}
          autoComplete="off"
        >
          <div className="input_form_box_inner">
            <div className="input_form msg_input flex-row">
              <span className="input_box_text w_120 justify-content-start black">To</span>
              <TextValidator
                className="input_box"
                validators={["required"]}
                errorMessages={["this field is required"]}
                variant="outlined"
                size="small"
                type="text" />
            </div>
            <div className="input_form msg_input flex-row mt_5">
              <span className="input_box_text w_120 justify-content-start black">Subject</span>
              <TextValidator
                className="input_box"
                validators={["required"]}
                errorMessages={["this field is required"]}
                variant="outlined"
                size="small"
                type="text"
              />
            </div>
            <div className="input_form mt_5">
              <span className="input_box_text w_100 justify-content-start black">Message</span>
              <TextValidator
                className="w-100 input_box"
                type="text"
                validators={["required"]}
                errorMessages={["this field is required"]}
                variant="outlined"
                size="small"
                multiline
                rows={4}
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
      <FooterManager />
    </div>
  );
};

export default ManagerNewMessage;
