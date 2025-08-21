/* eslint-disable no-unreachable */
/* eslint-disable array-callback-return */
import axios from "axios";
import {
  INPROGRESS,
  ERROR,
  LOGOUT,
  ERROR_PAGE,
  SICBO_BET_SELECTION,
  SICBO_CLEAR_BETSELECTION,
  SICBO_APPLY_CHIP,
  SHOW_SICBO_WINNING_AREA,
  SICBO_RESULT,
  BETS_BY_SICBO_SESSION,
} from "../Constants";
import ENVIRONMENT_VARIABLES from "../environment.config";
import { clearAccessToken, getAccessToken } from "../Utils";

export const sicboBetSelection = (selectedBet) => {
  try {
    return (dispatch) => {
      dispatch({
        type: SICBO_BET_SELECTION,
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
        type: SICBO_CLEAR_BETSELECTION,
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
              type: BETS_BY_SICBO_SESSION,
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
                // data: { error_msg: error.response.data.message },
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

export const getSicboResult = (session) => {
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
      sicboResult(api, session)
        .then((resultSession) => {
          dispatch({
            type: SICBO_RESULT,
            data: resultSession,
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

const sicboResult = async (api, session, count = 0) => {
  try {
    if (count < 3) {
      const response = await axios(api);
      const resultSession = response.data.sessions.find(
        (result) => result.id === session.id && result?.results?.sicbo !== null
      );
      if (!resultSession) return await sicboResult(api, session, ++count);
      return resultSession;
    } else {
      throw Error("method is called more than 3 times");
    }
  } catch (error) {
    throw error;
  }
};
export const sicboApplyChip = (selectedChip) => {
  try {
    return (dispatch) => {
      dispatch({
        type: SICBO_APPLY_CHIP,
        data: selectedChip,
      });
    };
  } catch (error) {
    alert(error.message.toString());
  }
};

export const confirmingSicboBet = async (userId, sessionId, baccarat) => {
  const bets = [];
  baccarat.filter((data) => {
    if (data.activeChip !== null) {
      bets.push({
        userId,
        gameSessionId: sessionId,
        gameType: "sicbo_1",
        fieldName: data.backEndValue,
        amount: data.activeChip.toString(),
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

export const showWinnigArea = () => {
  try {
    return (dispatch) => {
      dispatch({
        type: SHOW_SICBO_WINNING_AREA,
      });
    };
  } catch (error) {
    alert(error.message.toString());
  }
};
