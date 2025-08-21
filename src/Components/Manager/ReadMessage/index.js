import React from "react";
import Header from "../../../CommonComponents/Header";
import Button from '@material-ui/core/Button';
import "./ReadMessage.scss";
import FooterManager from "../../../CommonComponents/FooterManager";

const ManagerReadMessage = (props) => {
  return (
    <div className="agent_layout">
      <Header name={"Read Message"} />

      <div className="agent_body">
        <div className="sub_header">
          <span className="sub_header_text">Manager </span>
          <span className="sub_header_text">Hp854876960</span>
        </div>

        <div className="input_form_box">


          <div className="row_details">
            <div className="row_details_inner justify-content-between">
              <span className="row_details_text w_120 black">From</span>
              <span className="row_details_text">hp1234567</span>
            </div>
            <div className="row_details_inner mt_5 justify-content-between">
              <span className="row_details_text w_120 black">Subject</span>
              <span className="row_details_text">Change whatsapp number</span>
            </div>
            <div className="h-auto row_details_inner mt_5 flex-column align-items-start justify-content-between">
              <span className="row_details_text w_120 black">Message</span>
              <div className="message_box">
                <span className="">Change whatsapp number</span>
              </div>
            </div>
          </div>
          <div className="form_btn">
            <Button type="Submit" variant="contained" className="submit_btn">
              Reply
            </Button>
          </div>
        </div>
      </div>

      <FooterManager />
    </div>
  );
};

export default ManagerReadMessage;
