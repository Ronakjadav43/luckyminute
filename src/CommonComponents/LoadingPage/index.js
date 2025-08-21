import React from "react";
import "./style.scss";

const LoadingPage = (props) => {
  return (
    <div className="loadingPage_counter">
      <div className="counter_card">
        <span>New Game Open in </span>
        <span>{props.minutes}</span>
      </div>
    </div>
  );
};

export default LoadingPage;
