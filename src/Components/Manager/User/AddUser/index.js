import React, { useEffect, useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useNavigate } from "react-router-dom";

import * as UserAction from "../../../../Actions/User";
import Header from "../../../../CommonComponents/Header";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import Button from '@material-ui/core/Button';
import {
  INPROGRESS,
  SUCCESS_MESSAGE,
  NEW_USER,
  ERROR,
  LOGOUT,
} from "../../../../Constants";
import { clearAccessToken } from "../../../../Utils";
import "./AddUser.scss";
import FooterManager from "../../../../CommonComponents/FooterManager";

const AddAgent = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userDetail, setUserDetail] = useState({
    name: "",
    details: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    const field = event.target.name;
    const commonData = { ...userDetail };
    commonData[field] = event.target.value;
    return setUserDetail(commonData);
  };

  const addUser = () => {
    dispatch({ type: INPROGRESS });
    if (
      !userDetail.name ||
      !userDetail.password ||
      userDetail.name === "" ||
      userDetail.password === ""
    ) {
      return dispatch({
        type: ERROR,
        data: { error_msg: "All Fields are required" },
      });
    }

    if (userDetail.password !== userDetail.confirmPassword)
      return dispatch({
        type: ERROR,
        data: { error_msg: "Password and ConfirmPassword doesn't match" },
      });

    UserAction.addUser(userDetail)
      .then((response) => {
        if (response && response.status === 200) {
          dispatch({ type: SUCCESS_MESSAGE, data: { message: null } });
          navigate(`/Manager/User/Success/${response.data.user.name}`);
        }
      })
      .catch((error) => {
        if (error && error.response) {
          if (error.response.status === 403) {
            clearAccessToken();
            dispatch({
              type: LOGOUT,
            });
          } else
            dispatch({
              type: ERROR,
              data: { error_msg: error.response.data.message },
            });
        } else {
          dispatch({
            type: ERROR,
            data: { error_msg: error.message.toString() },
          });
        }
      });
  };

  return (
    <div className="agent_layout">
      <Header name={"Add Agent"} />
      <div className="agent_body">
        <ValidatorForm
          className="input_form_box"
          onSubmit={() => addUser()}
          autoComplete="off"
        >
          <div className="input_form_box_inner">
            <div className="input_form">
              <span className="input_box_text">Enter Player User Name</span>
              <TextValidator
                validators={["required"]}
                errorMessages={["this field is required"]}
                variant="outlined"
                size="small"
                type="text"
                className="input_box"
                name="name"
                value={userDetail.name}
                onChange={handleChange}
              />
            </div>
            <div className="input_form">
              <span className="input_box_text">Enter Player Password</span>
              <TextValidator
                validators={["required"]}
                errorMessages={["this field is required"]}
                variant="outlined"
                size="small"
                type="password"
                className="input_box"
                name="password"
                value={userDetail.password}
                onChange={handleChange}
              />
            </div>
            <div className="input_form">
              <span className="input_box_text">Re enter Password</span>
              <TextValidator
                validators={["required"]}
                errorMessages={["this field is required"]}
                variant="outlined"
                size="small"
                type="password"
                className="input_box"
                value={userDetail.confirmPassword}
                name="confirmPassword"
                onChange={handleChange}
              />
            </div>
            <div className="input_form">
              <span className="input_box_text">Details</span>
              <TextValidator
                className="input_box"
                name="details"
                value={userDetail.details}
                type="text"
                validators={["required"]}
                errorMessages={["this field is required"]}
                variant="outlined"
                size="small"
                multiline
                rows={3}
                onChange={handleChange}
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

const mapDispatchToProps = (dispatch) => ({
  actions: {
    userAction: bindActionCreators(UserAction, dispatch),
  },
});

export default connect(null, mapDispatchToProps)(AddAgent);
