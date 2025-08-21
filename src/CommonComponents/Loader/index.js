import React, { useEffect } from "react";
import $ from "jquery";
import Lottie from "react-lottie";
import * as animationData from "./loader";
import "./style.css";

const Loader = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    $("body").addClass("loading");
    return () => {
      $("body").removeClass("loading");
    }
  }, []);

  return (
    <div className="loadingPanel d-flex align-items-center lottie">
      <Lottie options={defaultOptions} height={250} width={250} />
    </div>
  )
}

export default Loader;