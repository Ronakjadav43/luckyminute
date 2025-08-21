import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notification = (props) => {
  const gameReducer = useSelector((state) => ({
    success_msg: state.gameReducer.success_msg,
    error_msg: state.gameReducer.error_msg,
  }));

  const notificationSetting = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  };

  useEffect(() => {
    if (gameReducer.error_msg) {
      let message = gameReducer.error_msg.split("E:");
      if (message.length > 1) {
        message = message[0];
      }
      toast.error(message, notificationSetting);
    }
  }, [gameReducer.error_msg]);

  useEffect(() => {
    if (gameReducer.success_msg) {
      toast.success(gameReducer.success_msg, notificationSetting);
    }
  }, [gameReducer.success_msg]);

  useEffect(() => {
    if (props.internalMsg && props.internalMsg.message) {
      toast.error(props.internalMsg.message, notificationSetting);
    }
  }, [props.internalMsg]);

  return <ToastContainer />;
};

export default Notification;
