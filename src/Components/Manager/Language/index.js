import React from "react";
import "./Language.scss";
import Button from '@material-ui/core/Button';
import FooterManager from "../../../CommonComponents/FooterManager";
import Header from "../../../CommonComponents/Header";

const ManagerLanguage = (props) => {
  return (
    <div className="agent_layout">
      <Header name={"Language"} />
      <div className="agent_body">
        <div
          className="input_form_box">
          <div className="game_details_box">
            
            <div className="game_details_box_inner center">
              <div className="details_box_btn border_1 w_70">
                <span className="btn_text wheat ">English</span>
              </div>
            </div>
            <div className="game_details_box_inner center">
              <div className="details_box_btn border_1 w_70 active">
                <span className="btn_text wheat ">简体中文</span>
              </div>
            </div>


          </div>
          <div className="form_btn">
            <Button type="Submit" variant="contained" className="submit_btn">
              Save
            </Button>
          </div>
        </div>
      </div>
      <FooterManager />
    </div>
  );
};

export default ManagerLanguage;
