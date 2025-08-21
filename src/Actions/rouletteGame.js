/* eslint-disable no-unreachable */
/* eslint-disable array-callback-return */
import axios from "axios";
import {
  INPROGRESS,
  ERROR,
  LOGOUT,
  ROULETTE_BET_SELECTION,
  CLEAR_BETSELECTION,
  APPLY_CHIP,
  ROULETTE_RESULT,
  GET_TOP_BETS,
  BETS_BY_SESSION,
  SHOW_WINNING_AREA,
  ERROR_PAGE,
} from "../Constants";
import ENVIRONMENT_VARIABLES from "../environment.config";
import { clearAccessToken, getAccessToken } from "../Utils";

export const rouletteBetSelection = (selectedBet) => {
  try {
    return (dispatch) => {
      dispatch({
        type: ROULETTE_BET_SELECTION,
        data: selectedBet,
      });
    };
  } catch (error) {
    alert(error.message.toString());
  }
};

export const clearBetSelection = () => {
  try {
    return (dispatch) => {
      dispatch({
        type: CLEAR_BETSELECTION,
      });
    };
  } catch (error) {
    alert(error.message.toString());
  }
};

export const getRouletteResult = (session) => {
  try {
    return (dispatch) => {
      dispatch({ type: INPROGRESS });
      const token = getAccessToken();
      const api = {
        method: "GET",
        headers: { Authorization: token },
        url:
          ENVIRONMENT_VARIABLES.Base_API_URL +
          "/bookmaker/games?sessionIds=" +
          session.id,
      };
      rouletteResult(api, session)
        .then((resustSession) => {
          dispatch({
            type: ROULETTE_RESULT,
            data: resustSession,
          });
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
              type: ERROR_PAGE,
            });
          }
        });
    };
  } catch (error) {
    alert(error.message.toString());
  }
};

const rouletteResult = async (api, session, count = 0) => {
  try {
    if (count < 3) {
      const response = await axios(api);
      const resultSession = response.data.sessions.find(
        (result) =>
          result.id === session.id && result?.results?.roulette !== null
      );
      if (!resultSession) return await rouletteResult(api, session, ++count);
      return resultSession;
    } else {
      throw Error("method is called more than 3 times");
    }
  } catch (error) {
    throw error;
  }
};

export const showWinnigArea = () => {
  try {
    return (dispatch) => {
      dispatch({
        type: SHOW_WINNING_AREA,
      });
    };
  } catch (error) {
    alert(error.message.toString());
  }
};

export const getBetsBySession = (userId, sessionId) => {
  try {
    return (dispatch) => {
      dispatch({ type: INPROGRESS });
      const token = getAccessToken();
      const api = {
        method: "GET",
        headers: { Authorization: token },
        url:
          ENVIRONMENT_VARIABLES.Base_API_URL +
          "/bookmaker/bets?userId=" +
          userId +
          "&gameSessionId=" +
          sessionId,
      };
      axios(api)
        .then((response) => {
          if (response.status === 200) {
            let bets = [];
            if (
              response.data.bets.length > 0 &&
              sessionId === response.data.bets[0].gameSessionId
            )
              bets = response.data.bets;
            dispatch({
              type: BETS_BY_SESSION,
              data: bets,
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
                type: ERROR_PAGE,
                // data: { error_msg: error.message },
              });
          } else {
            dispatch({
              type: ERROR,
              data: { error_msg: error.message.toString() },
            });
          }
        });
    };
  } catch (error) {
    alert(error.message.toString());
  }
};

export const confirmingRouletteBet = async (userId, sessionId, roulettes) => {
  const bets = [];
  roulettes.filter((roulette) => {
    if (roulette.activeChip !== null) {
      bets.push({
        userId,
        gameSessionId: sessionId,
        gameType: "roulette_1",
        fieldName: roulette.backEndValue,
        amount: roulette.activeChip.toString(),
      });
    }
  });

  const token = getAccessToken();
  const api = {
    method: "POST",
    headers: { Authorization: token },
    url: ENVIRONMENT_VARIABLES.Base_API_URL + "/bookmaker/bets",
    data: { bets },
  };
  return await axios(api);
};

export const applyChip = (selectedChip) => {
  try {
    return (dispatch) => {
      dispatch({
        type: APPLY_CHIP,
        data: selectedChip,
      });
    };
  } catch (error) {
    alert(error.message.toString());
  }
};

export const getTopBets = async (sessionId) => {
  try {
    return (dispatch) => {
      dispatch({ type: INPROGRESS });
      const token = getAccessToken();
      const api = {
        method: "GET",
        headers: { Authorization: token },
        url:
          ENVIRONMENT_VARIABLES.Base_API_URL +
          "/bookmaker/games/" +
          sessionId +
          "/top_players",
      };
      axios(api)
        .then((response) => {
          if (response.status === 200) {
            dispatch({
              type: GET_TOP_BETS,
              data: response.data.details,
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
    };
  } catch (error) {
    alert(error.message.toString());
  }
};
