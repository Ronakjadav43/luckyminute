import React from "react";
import "./ConnectionProblem.scss";

const ConnectionProblem = (props) => {
  return (
    <div className="connection_problem">
      <div className="connection_problem_inner">
        <span>Problem with your connection</span>
        <span>Please Reload</span>
      </div>
    </div>
  );
};

export default ConnectionProblem;
