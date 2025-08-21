/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import "./Roulette.css";

const RouletteWheel = (props) => {
  let style;
  let wheel;
  let ballTrack;
  let resultSpan;
  const wheelnumbersAC = [
    0, 10, 3, 8, 12, 11, 7, 13, 18, 6, 9, 17, 14, 2, 1, 4, 16, 15, 5,
  ];

  useEffect(() => {
    if (props.result !== null) {
      wheel = document.getElementsByClassName("wheel")[0];
      ballTrack = document.getElementsByClassName("ballTrack")[0];
      resultSpan = document.getElementsByClassName("resultNumber")[0];
      spin(props.result);
    }
  }, [props.result]);

  const BuildWheelInner = (props) => {
    const a = props.no;
    const index = props.index;
    let spanClass = a < 10 ? "single" : "double";
    return (
      <div id={"sect" + (index + 1)} className="sect">
        <span className={spanClass}>{a}</span>
        <div className="block">
          <div className="border_line" />
        </div>
      </div>
    );
  };

  const BuildWheel = (props) => {
    let numbers = [
      0, 5, 15, 16, 4, 1, 2, 14, 17, 9, 6, 18, 13, 7, 11, 12, 8, 3, 10,
    ];
    return (
      <div className="outerRim">
        <div className="wheel">
          {numbers.map((no, index) => (
            <BuildWheelInner key={index} no={no} index={index} />
          ))}
          <div className="pocketsRim" />
          <div className="ballTrack">
            <div className="ball" />
          </div>
          <div className="pockets" />
          <div className="cone">
            <span className="resultNumber" />
          </div>
        </div>
      </div>
    );
  };

  const spin = (number) => {
    spinWheel(number);
  };

  function spinWheel(winningSpin) {
    let degree = 0;
    for (let i = 0; i < wheelnumbersAC.length; i++) {
      if (wheelnumbersAC[i] === winningSpin) {
        degree = i * 18.947 + 362;
      }
    }

    wheel.style.cssText = "animation: wheelRotate 6.2s linear infinite;";
    ballTrack.style.cssText = "animation: ballRotate 1.2s linear infinite;";

    setTimeout(() => {
      ballTrack.style.cssText = "animation: ballRotate 2.4s linear infinite;";
      style = document.createElement("style");
      style.type = "text/css";
      style.innerText =
        "@keyframes ballStop {from {transform: rotate(0deg);}to{transform: rotate(-" +
        degree +
        "deg);}}";
      document.head.appendChild(style);
    }, 2400);

    setTimeout(() => {
      ballTrack.style.cssText = "animation: ballStop 3.6s linear;";
    }, 7200);

    setTimeout(() => {
      ballTrack.style.cssText = "transform: rotate(-" + degree + "deg);";
    }, 10800);

    setTimeout(() => {
      wheel.style.cssText = "";
      style.remove();
      resultSpan.innerText = winningSpin;
    }, 12000);
  }

  return (
    <div className="main_layout">
      <div className="main_layout_inner col_center">
        <BuildWheel />
      </div>
    </div>
  );
};

export default RouletteWheel;
