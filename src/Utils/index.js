import jwt_decode from "jwt-decode";
const sign = require("jwt-encode");
const secret = "LuckMinutes2022!";

export const getAccessToken = () => {
  return localStorage.getItem("accessToken");
};

export const clearAccessToken = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("userDetail");
  localStorage.clear();
};

export const setAccessToken = (token) => {
  localStorage.setItem("accessToken", token);
};

export const setUserDetail = (userDetail) => {
  const jwt = sign(userDetail, secret);
  localStorage.setItem("userDetail", jwt);
};

export const getUserDetail = () => {
  const jwt = localStorage.getItem("userDetail");
  if (jwt && jwt !== null && jwt !== "") {
    return jwt_decode(jwt);
  }
  return false;
};

export const isLoggedIn = () => {
  const accessToken = getAccessToken();
  return !!accessToken;
};

export const isLoggedInWithRole = (Role) => {
  const accessToken = getAccessToken();
  const userDetail = getUserDetail();
  return accessToken && userDetail.role === Role;
};

export const UserType = {
  PLAYER: 5,
  AGENT: 4,
  MANAGER: 3,
};
