/* eslint-disable array-callback-return */
/* eslint-disable no-unreachable */
import axios from "axios";
import {
  IS_AUTHENTICATED,
  ERROR,
  INPROGRESS,
  LOGOUT,
  GET_USER,
  GET_USER_BALANCE_MESSAGES,
  GET_GAME_TIME,
  GET_USERS,
  SUCCESS_MESSAGE,
  GET_USER_TRANSACTION,
  ERROR_PAGE,
} from "../Constants";
import ENVIRONMENT_VARIABLES from "../environment.config";
import {
  setAccessToken,
  clearAccessToken,
  getAccessToken,
  setUserDetail,
  getUserDetail,
} from "../Utils";

export const login = (loginDetails) => {
  try {
    return (dispatch) => {
      dispatch({ type: INPROGRESS });
      axios
        .post(ENVIRONMENT_VARIABLES.Base_API_URL + "/user/login", loginDetails)
        .then((response) => {
          if (response.status === 200) {
            setAccessToken(response.data.accessToken);
            dispatch({
              type: IS_AUTHENTICATED,
              data: { accessToken: response.data.accessToken },
            });
          }
        })
        .catch((error) => {
          if (error && error.response) {
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

export const logout = () => {
  try {
    return (dispatch) => {
      dispatch({ type: INPROGRESS });
      const token = localStorage.getItem("accessToken");
      const api = {
        method: "POST",
        headers: { Authorization: token },
        url: ENVIRONMENT_VARIABLES.Base_API_URL + "/user/logout",
      };
      axios(api)
        .then((response) => {
          if (response.status === 200) {
            clearAccessToken();
            dispatch({
              type: LOGOUT,
            });
          }
        })
        .catch((error) => {
          clearAccessToken();
          dispatch({
            type: LOGOUT,
          });
        });
    };
  } catch (error) {
    alert(error.message.toString());
  }
};

export const getUserDetails = () => {
  try {
    return (dispatch) => {
      dispatch({ type: INPROGRESS });
      const token = getAccessToken();
      const api = {
        method: "GET",
        headers: { Authorization: token },
        url: ENVIRONMENT_VARIABLES.Base_API_URL + "/user",
      };
      axios(api)
        .then((response) => {
          if (response.status === 200) {
            setUserDetail(response.data.user);
            dispatch({
              type: GET_USER,
              data: { userDetail: response.data.user },
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

export const getUserBalanceAndMessages = () => {
  try {
    return (dispatch) => {
      dispatch({ type: INPROGRESS });
      const token = getAccessToken();
      const api = {
        method: "GET",
        headers: { Authorization: token },
        url: ENVIRONMENT_VARIABLES.Base_API_URL + "/bookmaker/credit_balance",
      };
      axios(api)
        .then((response) => {
          if (response.status === 200) {
            dispatch({
              type: GET_USER_BALANCE_MESSAGES,
              data: { userBalance: response.data },
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

export const getGameTime = () => {
  try {
    return (dispatch) => {
      dispatch({ type: INPROGRESS });
      const token = getAccessToken();
      const api = {
        method: "GET",
        headers: { Authorization: token },
        url: ENVIRONMENT_VARIABLES.Base_API_URL + "/bookmaker/games?limit=1",
      };
      axios(api)
        .then((response) => {
          if (response.status === 200) {
            dispatch({
              type: GET_GAME_TIME,
              data: { sessions: response.data?.sessions[0] },
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

export const getUsers = (userName = null) => {
  try {
    let apiUrl = ENVIRONMENT_VARIABLES.Base_API_URL + "/user/balance/list";
    if (userName) {
      apiUrl =
        ENVIRONMENT_VARIABLES.Base_API_URL +
        `/user/balance/list?filter.name=${userName}`;
    }

    return (dispatch) => {
      dispatch({ type: INPROGRESS });
      const token = getAccessToken();
      const api = {
        method: "GET",
        headers: { Authorization: token },
        url: apiUrl,
      };
      axios(api)
        .then((response) => {
          if (response.status === 200) {
            if (response.data.users.length > 0) {
              dispatch({
                type: GET_USERS,
                data: { users: response.data.users },
              });
            } else {
              dispatch({
                type: ERROR,
                data: { error_msg: "we are not able to find this user" },
              });
            }
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

export const creditTransfers = async (transfersDetail) => {
  const token = getAccessToken();
  const api = {
    method: "POST",
    headers: { Authorization: token },
    url: ENVIRONMENT_VARIABLES.Base_API_URL + "/bookmaker/credit_transfers",
    data: transfersDetail,
  };
  const user = await axios(api);
  return user;
};

export const changePassword = (userDetail) => {
  try {
    return (dispatch) => {
      dispatch({ type: INPROGRESS });
      if (userDetail.oldPassword && userDetail.newPassword) {
        const token = getAccessToken();
        const user = getUserDetail();
        const api = {
          method: "POST",
          headers: { Authorization: token },
          url:
            ENVIRONMENT_VARIABLES.Base_API_URL +
            `/user/name/${user.name}/password/replace`,
          data: userDetail,
        };
        axios(api)
          .then((response) => {
            if (response.status === 200) {
              dispatch({
                type: SUCCESS_MESSAGE,
                data: {
                  message: `Your password is successfully changed`,
                },
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
      } else {
        dispatch({
          type: ERROR,
          data: {
            error_msg: "OldPassword and NewPassword should not be empty",
          },
        });
      }
    };
  } catch (error) {
    alert(error.message.toString());
  }
};

export const addUser = async (userDetail) => {
  const token = getAccessToken();
  const api = {
    method: "POST",
    headers: { Authorization: token },
    url: ENVIRONMENT_VARIABLES.Base_API_URL + "/user",
    data: userDetail,
  };
  const user = await axios(api);
  return user;
};

export const getUserTransactions = () => {
  try {
    return (dispatch) => {
      dispatch({ type: INPROGRESS });
      const token = getAccessToken();
      const api = {
        method: "GET",
        headers: { Authorization: token },
        url:
          ENVIRONMENT_VARIABLES.Base_API_URL + "/bookmaker/credit_transactions",
      };
      axios(api)
        .then((response) => {
          if (response.status === 200) {
            dispatch({
              type: GET_USER_TRANSACTION,
              data: { creditTransactions: response.data.creditTransactions },
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
