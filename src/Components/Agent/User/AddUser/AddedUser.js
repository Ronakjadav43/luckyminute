import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Header from "../../../../CommonComponents/Header";
import Button from "@material-ui/core/Button";
import "./AddUser.scss";
import FooterMenu from "../../../../CommonComponents/FooterMenu";

const AddedUser = (props) => {
  const navigate = useNavigate();
  const { userName } = useParams();

  useEffect(() => {
    if (!userName) {
      navigate("/Agent/User");
    }
  }, []);

  return (
    <div className="agent_layout">
      <Header name={"New Player Added"} />

      <div className="agent_body">
        <div className="input_form_box">
          <div className="input_form_box_inner">
            <div className="input_form">
              <span className="input_box_text">New Player User Name</span>
              <span className="input_box_text black">{userName}</span>
            </div>
          </div>
          <div className="form_btn">
            <Button variant="contained" className="submit_btn">
              Copy
            </Button>
          </div>
        </div>
      </div>
      <FooterMenu />
    </div>
  );
};

export default AddedUser;
