import React, { useEffect, useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { bindActionCreators } from "redux";

import Header from "../../../../CommonComponents/Header";
import { INPROGRESS, SUCCESS_MESSAGE, ERROR, LOGOUT } from "../../../../Constants";
import * as UserAction from "../../../../Actions/User";
import { clearAccessToken } from "../../../../Utils";
import "./WithdrawCredit.scss";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import Button from '@material-ui/core/Button';
import FooterMenu from "../../../../CommonComponents/FooterMenu";

const WithdrawCredit = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const { userName } = useParams();
  const [data, setData] = useState({
    amount: "",
  });

  const gameReducer = useSelector((state) => ({
    users: state.gameReducer.users,
    balance: state.gameReducer.balance,
    userDetail: state.gameReducer.userDetail,
  }));

  useEffect(() => {
    if (gameReducer.users.length) {
      const user = gameReducer.users.find(
        (singleUser) => singleUser.user.name === userName
      );
      if (!user) navigate("/Agent/UserDetail/" + userName);
      setUser(user);
    }
  }, [gameReducer.users]);

  const submit = async () => {
    dispatch({ type: INPROGRESS });
    if (data.amount && data.amount !== "") {
      try {
        UserAction.creditTransfers({
          fromUserId: user.user.id,
          toUserId: gameReducer.userDetail.id,
          amount: data.amount,
          reference: "Withdraw",
        })
          .then((response) => {
            if (response.data.success) {
              props.actions.userAction.getUserBalanceAndMessages();
              props.actions.userAction.getUsers(userName);
              setData({ amount: "" });
              dispatch({
                type: SUCCESS_MESSAGE,
                data: {
                  message: `Amount ${data.amount} transferred successfully`,
                },
              });
            } else {
              dispatch({
                type: ERROR,
                data: { error_msg: response.data.message },
              });
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
      } catch (error) {
        dispatch({
          type: ERROR,
          data: { error_msg: error.message },
        });
      }
    } else {
      dispatch({
        type: ERROR,
        data: { error_msg: "Invalid Amount" },
      });
    }
  };

  const handleChange = (event) => {
    const field = event.target.name;
    const commonData = { ...data };
    commonData[field] = event.target.value;
    return setData(commonData);
  };

  return (
    <div className="agent_layout">
      <Header name={"Withdraw Credit"} />
      {user && (
          <div className="agent_body">
            <div className="row_details">
              <div className="row_details_inner">
                <span className="row_details_text">User Name</span>
                <span className="row_details_text">{user.user.name}</span>
              </div>
              <div className="row_details_inner">
                <span className="row_details_text">Player Balance</span>
                <span className="row_details_text">{user.balance}</span>
              </div>
              <div className="row_details_inner">
                <span className="row_details_text">Agent Balance</span>
                <span className="row_details_text">{gameReducer.balance}</span>
              </div>
            </div>

            <ValidatorForm
              className="input_form_box"
              onSubmit={() => submit()}
              autoComplete="off"
            >
            <div className="input_form_box_inner">
              <div className="input_form">
                <span className="input_box_text">Enter Deposit Amount</span>
                <TextValidator
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                  variant="outlined"
                  size="small"
                  type="number"
                  className="input_box "
                  value={data.amount}
                  name="amount"
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
      )}
      <FooterMenu />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  actions: {
    userAction: bindActionCreators(UserAction, dispatch),
  },
});

export default connect(null, mapDispatchToProps)(WithdrawCredit);
