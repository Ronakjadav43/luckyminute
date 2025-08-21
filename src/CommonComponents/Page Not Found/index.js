import React from "react";
import "./PageNotFound.scss";

const PageNotFound = () => {
  return (
    <div className="pagenotfound">
      <div className="pagenotfound_image">
        <img src="/img/404.png" />
      </div>
      <span className="pagenotfound_text">Page Not Found</span>
    </div>
  );
};

export default PageNotFound;
