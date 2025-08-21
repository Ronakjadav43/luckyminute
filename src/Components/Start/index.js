import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { bindActionCreators } from "redux";

import * as UserAction from "../../Actions/User";
import Loader from "../../CommonComponents/Loader";
import PageNotSpotted from "../../CommonComponents/PageNotSpotted";
import Notification from "../../CommonComponents/Notification";
import "./Start.scss";
import Slider from "react-slick";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import { Button } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ReplayIcon from "@material-ui/icons/Replay";
import clsx from "clsx";

const Start = (props) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [messages, setMessages] = useState(0);
  const [isOpenSeeMore, setIsOpenSeeMore] = useState(false);

  const gameReducer = useSelector((state) => ({
    token: state.gameReducer.token,
    loading: state.gameReducer.loading,
    userDetail: state.gameReducer.userDetail,
    balance: state.gameReducer.balance,
    messages: state.gameReducer.messages,
  }));

  const redirect = (url) => {
    navigate(url);
  };

  const logout = () => {
    props.actions.userAction.logout();
  };

  useEffect(() => {
    if (gameReducer.token == null) {
      navigate("/Login");
    } else {
      props.actions.userAction.getUserDetails();
    }
  }, [gameReducer.token]);

  useEffect(() => {
    if (gameReducer.userDetail) {
      props.actions.userAction.getUserBalanceAndMessages();
      setName(gameReducer.userDetail.name);
    }
  }, [gameReducer.userDetail]);

  useEffect(() => {
    if (gameReducer.balance) {
      setAmount(gameReducer.balance);
    }
  }, [gameReducer.balance]);

  useEffect(() => {
    if (gameReducer.messages) {
      setMessages(gameReducer.messages);
    }
  }, [gameReducer.messages]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  //card

  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      duration: theme.transitions.duration.shortest,
      fontFamily: "Inter",
      fontWeight: 400,
      fontSize: "16px",
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      color: "#FF9900",
      padding: 0,
      width: "150px",
      margin: "auto",
      transition: theme.transitions.create("transform", {}),
    },
    expandOpen: {
      display: "none",
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [hideButton, setHideButton] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const seeMore = () => {
    setIsOpenSeeMore(!isOpenSeeMore);
  };

  return (
    <div>
      <Notification />
      <div className="start">
        <div className="start_header">
          <img className="back_btn" src="/img/Logo.svg" />
          <span className="user_name">{name}</span>

          <Dropdown className="main_menu">
            <Dropdown.Toggle id="dropdown-basic">
              <i className="fa-solid fa-ellipsis-vertical game_info"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => redirect("DisplayName")}>
                Display Name
              </Dropdown.Item>
              <Dropdown.Item>Agent Information</Dropdown.Item>
              <Dropdown.Item onClick={() => redirect("TransactionRecord")}>
                Transaction
              </Dropdown.Item>
              <Dropdown.Item onClick={() => redirect("BetHistory")}>
                Bet History
              </Dropdown.Item>
              <Dropdown.Item onClick={() => redirect("ResetPassword")}>
                Change Password
              </Dropdown.Item>
              <Dropdown.Item onClick={() => redirect("/Languages")}>
                Language
              </Dropdown.Item>
              <Dropdown.Item onClick={() => redirect("/SoundVibrate")}>
                Sound & Vibrate
              </Dropdown.Item>
              <Dropdown.Item onClick={() => logout()}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="start_inner">
          <Slider {...settings} className="start_slider">
            <div
              className={isOpenSeeMore ? "slider_box seemore" : "slider_box"}
            >
              <span className="slider_header">Agent Information</span>
              <span className="slider-text">
                This page is for agent to provide player the agent contact and
                transfer information
              </span>
              <span className="slider-text">Contact: 1723494040</span>
              <span className="slider-text">Bank account</span>

              <span className="slider-text">Minimum transfer 500</span>
              <span className="slider-text">
                The agent information appear when the player first login.
              </span>
              <div className="seemore-btn">
                <Button onClick={seeMore}>SeeMore</Button>
              </div>
            </div>
            <div className="slider_box2">
              <span className="slider_box2_header">
                Lucky <span>Minute</span> 幸运<span>1分</span>
              </span>
              <span className="Operator_Name_text">Operator_Name</span>

              <div className="user_names">
                <span>Your Agent</span>
                <span>agent_displayname</span>
              </div>
              <div className="user_names">
                <span>Display Name</span>
                <span>player_displayname</span>
              </div>
            </div>
            <div className="slider_box2">
              <span className="Operator_Name_text">Message</span>
              <div className="user_names">
                <span className="wight_color">{messages} new messages</span>
              </div>
              <div className="messages">
                <div className="messages_inner">
                  <span>Agent</span>
                  <span>21/2/23 22:12 </span>
                </div>
                <div className="messages_inner1">
                  <span className="message_text">My new contact is 123456</span>
                  <span className="bag">90</span>
                </div>
              </div>
            </div>
          </Slider>

          <div className="user_info">
            <div className="user_balance">
              <span className="balance_text">Balance</span>
              <span className="balance_text">{amount}</span>
            </div>
            <div className="user_info_inner">
              <div className="user_detail">
                <span className="detail_text">17/12/2022</span>
                <span className="detail_text">22:30 </span>
              </div>
              <div className="user_detail">
                <span className="detail_text">Deposited</span>
                <span className="detail_text">+2000 </span>
              </div>
            </div>
            <div className="reload_icon_icon">
              <ReplayIcon />
            </div>
          </div>

          <div className="games_option">
            <div
              className="select_game_card"
              onClick={() => redirect("Baccarat")}
            >
              <img src="/img/bacarrat.svg" alt="game-img" />
              <div className="game_name">
                <span className="baccarat_game_text1">百家乐</span>
                <span className="baccarat_game_text">Baccarat</span>
              </div>
            </div>

            <div className="select_game_card" onClick={() => redirect("SicBo")}>
              <img src="/img/sicbo.svg" alt="game-img" />
              <div className="game_name">
                <span className="sicbo_game_text1">骰宝</span>
                <span className="sicbo_game_text">Sic Bo</span>
              </div>
            </div>

            <div
              className="select_game_card"
              onClick={() => redirect("Roulette")}
            >
              <img src="/img/roulette wheel.svg" alt="game-img" />
              <div className="game_name">
                <span className="roulette_game_text1">轮盘赌</span>
                <span className="roulette_game_text">Roulette</span>
              </div>
            </div>
          </div>
        </div>

        {gameReducer.loading && <Loader />}
      </div>
      <PageNotSpotted />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  actions: {
    userAction: bindActionCreators(UserAction, dispatch),
  },
});

export default connect(null, mapDispatchToProps)(Start);
