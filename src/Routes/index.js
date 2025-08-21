import React from "react";
import { Navigate } from "react-router-dom";
import {
  clearAccessToken,
  getUserDetail,
  isLoggedIn,
  isLoggedInWithRole,
  UserType,
} from "../Utils";

export const RequireAuthPlayer = ({ children }) => {
  return isLoggedInWithRole(UserType.PLAYER) ? (
    children
  ) : (
    <Navigate to="/Login" replace />
  );
};

export const RequireAuthAgent = ({ children }) => {
  return isLoggedInWithRole(UserType.AGENT) ? (
    children
  ) : (
    <Navigate to="/Login" replace />
  );
};

export const RequireAuthManager = ({ children }) => {
  return isLoggedInWithRole(UserType.MANAGER) ? (
    children
  ) : (
    <Navigate to="/Login" replace />
  );
};

export const LoginedIn = ({ children }) => {
  const isLogged = isLoggedIn();
  if (isLogged) {
    const userDetail = getUserDetail();
    const userRole = userDetail.role;
    if (userRole === UserType.PLAYER) {
      return <Navigate to="/" replace />
    } else if (userRole === UserType.AGENT) {
      return <Navigate to="/Agent" replace />
    } else if (userRole === UserType.MANAGER) {
      return <Navigate to="/Manager" replace />
    } else {
      clearAccessToken();
    }
  }
  return children;
};
