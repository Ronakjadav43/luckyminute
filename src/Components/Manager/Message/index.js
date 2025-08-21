import React from "react";
import "./Message.scss";
import { useNavigate } from "react-router-dom";
import Header from "../../../CommonComponents/Header";
import Button from '@material-ui/core/Button';
import FooterManager from "../../../CommonComponents/FooterManager";

const ManagerMessage = (props) => {
  const navigate = useNavigate();
  const redirect = (url) => {
    navigate(url);
  };

  return (
    <div className="agent_layout">
      <Header name={"Message"} />
      <div className="agent_body">
        <div className="input_form_box">
          <div className="table_div">
            <div className="table_header">
              <span className="table_header_text">Sender</span>
              <span className="table_header_text">Message</span>
              <span className="table_header_text">Date</span>
            </div>
            <div className="table_body">
              <div className="table_body_list" onClick={() => redirect("ReadMessage")}>
                <span className="body_list">hp1234567</span>
                <span className="body_list">Hello</span>
                <span className="body_list">14/01/2022</span>
              </div>
              <div className="table_body_list" onClick={() => redirect("ReadMessage")}>
                <span className="body_list">hp1234567</span>
                <span className="body_list">Hello</span>
                <span className="body_list">14/01/2022</span>
              </div>
              <div className="table_body_list" onClick={() => redirect("ReadMessage")}>
                <span className="body_list">hp1234567</span>
                <span className="body_list">Hello</span>
                <span className="body_list">14/01/2022</span>
              </div>
              <div className="table_body_list" onClick={() => redirect("ReadMessage")}>
                <span className="body_list">hp1234567</span>
                <span className="body_list">Hello</span>
                <span className="body_list">14/01/2022</span>
              </div>
              <div className="table_body_list" onClick={() => redirect("ReadMessage")}>
                <span className="body_list">hp1234567</span>
                <span className="body_list">Hello</span>
                <span className="body_list">14/01/2022</span>
              </div>
              <div className="table_body_list" onClick={() => redirect("ReadMessage")}>
                <span className="body_list">hp1234567</span>
                <span className="body_list">Hello</span>
                <span className="body_list">14/01/2022</span>
              </div>
              <div className="table_body_list" onClick={() => redirect("ReadMessage")}>
                <span className="body_list">hp1234567</span>
                <span className="body_list">Hello</span>
                <span className="body_list">14/01/2022</span>
              </div>
              <div className="table_body_list" onClick={() => redirect("ReadMessage")}>
                <span className="body_list">hp1234567</span>
                <span className="body_list">Hello</span>
                <span className="body_list">14/01/2022</span>
              </div>
              <div className="table_body_list" onClick={() => redirect("ReadMessage")}>
                <span className="body_list">hp1234567</span>
                <span className="body_list">Hello</span>
                <span className="body_list">14/01/2022</span>
              </div>
              <div className="table_body_list" onClick={() => redirect("ReadMessage")}>
                <span className="body_list">hp1234567</span>
                <span className="body_list">Hello</span>
                <span className="body_list">14/01/2022</span>
              </div>
              <div className="table_body_list" onClick={() => redirect("ReadMessage")}>
                <span className="body_list">hp1234567</span>
                <span className="body_list">Hello</span>
                <span className="body_list">14/01/2022</span>
              </div>
              <div className="table_body_list" onClick={() => redirect("ReadMessage")}>
                <span className="body_list">hp1234567</span>
                <span className="body_list">Hello</span>
                <span className="body_list">14/01/2022</span>
              </div>
              <div className="table_body_list" onClick={() => redirect("ReadMessage")}>
                <span className="body_list">hp1234567</span>
                <span className="body_list">Hello</span>
                <span className="body_list">14/01/2022</span>
              </div>

              <div className="table_body_list" onClick={() => redirect("ReadMessage")}>
                <span className="body_list">hp1234567</span>
                <span className="body_list">Hello</span>
                <span className="body_list">14/01/2022</span>
              </div>
              <div className="table_body_list" onClick={() => redirect("ReadMessage")}>
                <span className="body_list">hp1234567</span>
                <span className="body_list">Hello</span>
                <span className="body_list">14/01/2022</span>
              </div>
              <div className="table_body_list" onClick={() => redirect("ReadMessage")}>
                <span className="body_list">hp1234567</span>
                <span className="body_list">Hello</span>
                <span className="body_list">14/01/2022</span>
              </div>
              <div className="table_body_list" onClick={() => redirect("ReadMessage")}>
                <span className="body_list">hp1234567</span>
                <span className="body_list">Hello</span>
                <span className="body_list">14/01/2022</span>
              </div>
              <div className="table_body_list" onClick={() => redirect("ReadMessage")}>
                <span className="body_list">hp1234567</span>
                <span className="body_list">Hello</span>
                <span className="body_list">14/01/2022</span>
              </div>
              <div className="table_body_list" onClick={() => redirect("ReadMessage")}>
                <span className="body_list">hp1234567</span>
                <span className="body_list">Hello</span>
                <span className="body_list">14/01/2022</span>
              </div>
              <div className="table_body_list" onClick={() => redirect("ReadMessage")}>
                <span className="body_list">hp1234567</span>
                <span className="body_list">Hello</span>
                <span className="body_list">14/01/2022</span>
              </div>
              <div className="table_body_list" onClick={() => redirect("ReadMessage")}>
                <span className="body_list">hp1234567</span>
                <span className="body_list">Hello</span>
                <span className="body_list">14/01/2022</span>
              </div>
              <div className="table_body_list" onClick={() => redirect("ReadMessage")}>
                <span className="body_list">hp1234567</span>
                <span className="body_list">Hello</span>
                <span className="body_list">14/01/2022</span>
              </div>
              <div className="table_body_list" onClick={() => redirect("ReadMessage")}>
                <span className="body_list">hp1234567</span>
                <span className="body_list">Hello</span>
                <span className="body_list">14/01/2022</span>
              </div>
              <div className="table_body_list" onClick={() => redirect("ReadMessage")}>
                <span className="body_list">hp1234567</span>
                <span className="body_list">Hello</span>
                <span className="body_list">14/01/2022</span>
              </div>
              <div className="table_body_list" onClick={() => redirect("ReadMessage")}>
                <span className="body_list">hp1234567</span>
                <span className="body_list">Hello</span>
                <span className="body_list">14/01/2022</span>
              </div>

            </div>



          </div>

          <div className="form_btn">
            <Button
              type="Submit" variant="contained" className="message_btn submit_btn" onClick={() => redirect("NewMessage")}>
              New Message
            </Button>
          </div>
        </div>
      </div>


      <FooterManager />

    </div>
  );
};

export default ManagerMessage;
