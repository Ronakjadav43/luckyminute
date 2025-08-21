/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Draggable from "react-draggable";
import { connect, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import "@fontsource/inter";
import "@fortawesome/fontawesome-free/css/all.min.css";
import moment from "moment-timezone";
import PageNotSpotted from "../../CommonComponents/PageNotSpotted";
import ChipSlider from "../Roulette/Common/ChipSlider/ChipSlider";
import LuckyMinute from "../../CommonComponents/LuckyMinute/LuckyMinute";
import Header from "../../CommonComponents/Header";
import GameDetails from "../../CommonComponents/GameDetail";
import Footer from "../../CommonComponents/Footer";
import * as rouletteGame from "../../Actions/rouletteGame";
import * as UserAction from "../../Actions/User";
import Loader from "../../CommonComponents/Loader";
import Notification from "../../CommonComponents/Notification";
import {
  CLEAR_GAMERESULT_VALUE,
  CONFIRMING_BET,
  ERROR,
  INPROGRESS,
  LOGOUT,
  SHOW_ROULETTE_RESULT_AREA,
} from "../../Constants";
import { clearAccessToken } from "../../Utils";
import ConnectionProblem from "../../CommonComponents/ConnectionProblem";
import LoadingPage from "../../CommonComponents/LoadingPage";
import TopBets from "../Roulette/TopBets";
import TopWinners from "../Roulette/TopWinners";
import "./HomeRoulette.scss";

const HomeRoulette = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  const [minutes, setMinutes] = useState(null);
  const [countClassName, setCountClassName] = useState("");
  const [progresClassName, setProgresClassName] = useState("");
  const [message, setMessage] = useState("");
  const [sessions, setSessions] = useState(null);
  const [percentageValue, setPercentageValue] = useState(15);
  const [stepId, setStepId] = useState(null);
  const gameId = 1;
  const [result, setResult] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const additionalTime = 10;
  const [isLoadingPage, setIsLoadingPage] = useState(false);
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  //Get reducers value
  const gameReducer = useSelector((state) => ({
    loading: state.gameReducer.loading,
    roulette: state.gameReducer.roulette,
    isChipsActive: state.gameReducer.isChipsActive,
    balance: state.gameReducer.balance,
    token: state.gameReducer.token,
    userDetail: state.gameReducer.userDetail,
    confirmBet: state.gameReducer.confirmBet,
    message: state.gameReducer.message,
    sessions: state.gameReducer.sessions,
    rouletteResult: state.gameReducer.rouletteResult,
    winningChips: state.gameReducer.winningChips,
    applyChips: state.gameReducer.applyChips,
    isError: state.gameReducer.isError,
    rouletteAppliedChips: state.gameReducer.rouletteAppliedChips,
  }));

  const [page, setPage] = useState([
    {
      id: 1,
      name: "start_game",
      navigate_url: null,
      time: 0,
      isActiveStep: false,
      message: "Place Your Bet",
    },
    {
      id: 2,
      name: "top_bets",
      time: 0,
      isActiveStep: false,
      message: "Top Bets Placed",
    },
    {
      id: 3,
      name: "start_roulette_wheel",
      time: 0,
      isActiveStep: false,
      message: "Result...",
    },
    {
      id: 4,
      name: "highlight_bets",
      navigate_url: "/Roulette",
      time: 0,
      isActiveStep: false,
    },
    {
      id: 5,
      name: "winners_list",
      time: 0,
      isActiveStep: false,
      message: "Top Winners",
    },
    {
      id: 6,
      name: "highlight_wining",
      navigate_url: "/Roulette",
      time: 0,
      isActiveStep: false,
      message: "Play Next Game",
    },
    {
      id: 7,
      name: "loading_page",
      time: 0,
      isActiveStep: false,
      message: "Game Closed",
    },
    {
      id: 8,
      name: "error_page",
      time: 0,
      isActiveStep: false,
    },
  ]);

  useEffect(() => {
    // Update network status
    const handleStatusChange = () => {
      setIsOnline(window.navigator.onLine);
    };

    if (!isOnline) {
      page.map((singlePage) => (singlePage.isActiveStep = false));
      setIsLoadingPage(false);
      setStepId(10);
      setMessage("Reload ");
      setPage([...page]);
    } else {
      rouletteStart();
    }

    // Listen to the online status
    window.addEventListener("online", handleStatusChange);

    // Listen to the offline status
    window.addEventListener("offline", handleStatusChange);

    // Specify how to clean up after this effect for performance improvment
    return () => {
      window.removeEventListener("online", handleStatusChange);
      window.removeEventListener("offline", handleStatusChange);
    };
  }, [isOnline]);

  const rouletteStart = () => {
    if (isOnline) {
      setIsLoadingPage(false);
      props.actions.userAction.getGameTime();
      if (gameReducer.userDetail) {
        props.actions.userAction.getUserBalanceAndMessages();
      } else {
        props.actions.userAction.getUserDetails();
      }
    }
  };

  useEffect(() => {
    rouletteStart();
  }, [gameReducer.userDetail]);

  useEffect(() => {
    if (gameReducer.balance) {
      setAmount(gameReducer.balance);
    }
  }, [gameReducer.balance]);

  useEffect(() => {
    if (gameReducer.sessions !== null) {
      const gameSessionData = gameReducer.sessions;
      setSessions(gameSessionData);
      setGameMinutes(gameSessionData);
      props.actions.rouletteGame.getBetsBySession(
        gameReducer.userDetail.id,
        gameReducer.sessions.id
      );
    }
  }, [gameReducer.sessions]);

  useEffect(() => {
    if (gameReducer.message === "Bet Accepted") {
      if (minutes > 3) {
        setTimeout(() => {
          setMessage("Place More Bets");
        }, 2000);
      }
    }
    setMessage(gameReducer.message);
  }, [gameReducer.message]);

  useEffect(() => {
    if (gameReducer.token == null) {
      navigate("/Login");
    }
  }, [gameReducer.token]);

  useEffect(() => {
    if (gameReducer.rouletteResult) {
      setResult(gameReducer.rouletteResult);
    }
  }, [gameReducer.rouletteResult]);

  useEffect(() => {
    if (gameReducer.isError) {
      setIsLoadingPage(false);
      navigate("Error");
      setStepId(8);
      setMessage("Reload");
    }
  }, [gameReducer.isError]);

  const setGameMinutes = (gameSessionData) => {
    if (gameSessionData) {
      setIsLoadingPage(false);
      let diff = 0;
      setCountClassName("");
      let { startedAt, closedAt, endedAt } = gameSessionData;
      const currenttime = moment();
      setStartTime(moment(startedAt).format("hh:mm"));
      startedAt = moment(startedAt);
      closedAt = moment(closedAt);
      endedAt = moment(endedAt);
      diff = closedAt.diff(currenttime, "seconds");
      let firstPage = page.find((data) => data.id === 1);
      let loadingPage = page.find((data) => data.id === 7);
      if (diff > 0) {
        loadingPage.time = 0;
        firstPage.isActiveStep = true;
        firstPage.time = diff;
        setMessage(firstPage.message);
        setStepId(firstPage.id);
        setCountClassName("");
        setProgresClassName("");
        navigate("/Roulette");
      } else {
        loadingPage.time = diff + additionalTime;
        firstPage.isActiveStep = false;
        loadingPage.isActiveStep = true;
        setIsLoadingPage(true);
        setMessage(loadingPage.message);
        setStepId(loadingPage.id);
        setCountClassName("game_time_btn_neutral");
      }
      setPage([...page]);
    }
  };

  useEffect(() => {
    let activeStep = page.find((data) => data.isActiveStep === true);
    if (activeStep) {
      setMinutes(activeStep.time);
    }
  }, [page]);

  useEffect(() => {
    if (
      minutes !== null &&
      !gameReducer.isError &&
      isOnline &&
      sessions !== null
    ) {
      const newMinute = minutes - 1;

      let activeStep = page.find((data) => data.isActiveStep === true);
      if (activeStep) {
        const timer = setInterval(() => {
          if (activeStep.id === 1 && newMinute === 0) {
            setMessage("No More Bet");
            setStepId(9);
          }
          if (activeStep.id === 4 && newMinute === 2) {
            props.actions.rouletteGame.showWinnigArea();
            props.actions.userAction.getUserBalanceAndMessages();
          }
          setMinutes(newMinute);
        }, 1000);

        if (
          (activeStep.id === 1 && minutes === -1) ||
          // (activeStep.id === 7 && minutes === 1) ||
          (activeStep.id !== 1 && minutes === 0)
        ) {
          clearInterval(timer);
          activeStep.isActiveStep = false;
          activeStep.time = 0;
          const nextActiveStep = page.find(
            (data) => data.id === activeStep.id + 1
          );
          switch (activeStep.id) {
            case 1:
              if (nextActiveStep) {
                nextActiveStep.isActiveStep = true;
                nextActiveStep.time = 5;
                setPage([...page]);
                setMessage(nextActiveStep.message);
                setStepId(nextActiveStep.id);
                props.actions.rouletteGame.clearBetSelection();
                const bets = gameReducer.roulette.filter(
                  (roulette) => roulette.chip !== null
                );
                if (bets.length > 0) {
                  props.actions.rouletteGame.getBetsBySession(
                    gameReducer.userDetail.id,
                    sessions.id
                  );
                }
              }
              break;

            case 2:
              if (nextActiveStep) {
                props.actions.rouletteGame.getRouletteResult(sessions);
                nextActiveStep.isActiveStep = true;
                nextActiveStep.time = 14;
                setPage([...page]);
                setMessage(nextActiveStep.message);
                setStepId(nextActiveStep.id);
              }
              break;

            case 3:
              if (nextActiveStep) {
                dispatch({
                  type: CLEAR_GAMERESULT_VALUE,
                });
                dispatch({
                  type: SHOW_ROULETTE_RESULT_AREA,
                });
                nextActiveStep.isActiveStep = true;
                nextActiveStep.time = 4;
                setPage([...page]);
                setMessage(result);
                setStepId(nextActiveStep.id);
                setCountClassName("game_time_btn_warning");
              }
              break;

            case 4:
              if (nextActiveStep) {
                nextActiveStep.isActiveStep = true;
                nextActiveStep.time = 3;
                setStepId(nextActiveStep.id);
                setPage([...page]);
                setMessage(nextActiveStep.message);
                setCountClassName("game_time_btn_warning");
              }
              break;

            case 5:
              if (nextActiveStep) {
                nextActiveStep.isActiveStep = true;
                setPage([...page]);
                setMessage(nextActiveStep.message);
                setStepId(nextActiveStep.id);
                setCountClassName("game_time_btn_warning");
              }
              break;

            case 6:
              if (activeStep.id === 6) {
                setPage([...page]);
              }
              break;

            case 7:
              if (nextActiveStep) rouletteStart();
              break;

            default:
              break;
          }

          if (
            nextActiveStep.isActiveStep === true &&
            nextActiveStep.navigate_url
          ) {
            navigate(nextActiveStep.navigate_url);
          }
        }

        if (activeStep.id === 1) {
          if (minutes >= 6 && minutes <= 10) {
            setCountClassName("game_time_btn_warning");
            setProgresClassName("progressbar_warning");
          } else if (minutes <= 5) {
            setMessage("Bet Closing");
            setCountClassName("game_time_btn_danger");
            setProgresClassName("progressbar_danger");
          }
        }

        if (activeStep.id === 2) {
          setCountClassName("game_time_btn_neutral");
          if (minutes <= 5 && minutes > 0) {
            setMessage("Revealing Soon");
            navigate("/Roulette");
          }
        }

        if (activeStep.id === 4) {
          if (minutes === 2) {
            setMessage(
              `Bet ${gameReducer.applyChips} Win ${gameReducer.winningChips}`
            );
          }
        }

        return () => clearInterval(timer);
      }
    }
  }, [minutes]);

  const reload = () => {
    rouletteStart();
  };

  const handleNext = () => {
    setMinutes(0);
  };

  //Clear Selected Bet
  const clearingBet = () => {
    props.actions.rouletteGame.clearBetSelection();
  };

  //Apply Chip
  const handleChip = (selectedChip) => {
    if (selectedChip <= amount) {
      props.actions.rouletteGame.applyChip(selectedChip);
    } else {
      dispatch({
        type: ERROR,
        data: { error_msg: "insufficient Balance" },
      });
    }
  };

  //ConfirmingBet Selected Bet
  const confirmingBet = () => {
    dispatch({ type: INPROGRESS });
    rouletteGame
      .confirmingRouletteBet(
        gameReducer.userDetail.id,
        sessions.id,
        gameReducer.roulette
      )
      .then((response) => {
        if (response.status === 200) {
          if (response.data.failedBets.length === 0) {
            props.actions.userAction.getUserBalanceAndMessages();
            dispatch({
              type: CONFIRMING_BET,
            });
          } else {
            dispatch({
              type: ERROR,
              data: { error_msg: response.data.error[0] },
            });
          }
        }
      })
      .catch((error) => {
        if (error && error.response) {
          props.actions.rouletteGame.clearBetSelection();
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
    <div>
      <Notification />
      <div className="homeroulette">
        <Header name="轮盘 Roulette" />
        <div className="game_details">
          <GameDetails header={"Start Time"} value={startTime} />
          <GameDetails header={"Balance"} value={amount} />
          <GameDetails
            header={"Bet"}
            value={gameReducer.rouletteAppliedChips}
          />
        </div>
        <div style={{ position: "relative" }}>
          <Outlet />
          {stepId !== 1 && stepId !== 5 && <div className="no_more_bet"></div>}
          {stepId === 2 && minutes > 2 && (
            <div className="no_more_bet">
              <TopBets />
            </div>
          )}
          {stepId === 5 && (
            <div className="no_more_bet">
              <TopWinners />
            </div>
          )}
          {!isOnline && stepId === 10 && <ConnectionProblem />}
        </div>

        <Footer
          message={message}
          isChipsActive={gameReducer.isChipsActive}
          clearingBet={clearingBet}
          confirmBet={gameReducer.confirmBet}
          confirmingBet={confirmingBet}
          minutes={minutes}
          percentageValue={percentageValue}
          countClassName={countClassName}
          progresClassName={progresClassName}
          gameId={gameId}
          stepId={stepId}
          result={result}
          handleNext={handleNext}
          reload={reload}
        />

        {isLoadingPage && <LoadingPage minutes={minutes} />}

        {stepId === 1 && gameReducer.isChipsActive ? (
          <Draggable bounds="parent" handle="#drag_drop">
            <div className="draggable">
              <i
                id="drag_drop"
                className="fa-solid fa-arrows-up-down-left-right"
              ></i>
              <ChipSlider handleChip={handleChip} />
            </div>
          </Draggable>
        ) : (
          <LuckyMinute />
        )}
        {gameReducer.loading && <Loader />}
      </div>
      <PageNotSpotted />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  actions: {
    rouletteGame: bindActionCreators(rouletteGame, dispatch),
    userAction: bindActionCreators(UserAction, dispatch),
  },
});

export default connect(null, mapDispatchToProps)(HomeRoulette);
