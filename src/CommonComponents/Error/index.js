import React from "react";
import "./ErrorMessage.scss";

const Error = () => {
  return (
    <div className="main_layout">
      <div className="error_message">
        <span className="error_text">Opps.. Problem with your connection.</span>
        <span className="error_text">Please try again later</span>
      </div>
    </div>
  );
};

export default Error;
