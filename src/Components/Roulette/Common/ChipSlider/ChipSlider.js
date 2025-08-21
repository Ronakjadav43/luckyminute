import React, { useState } from "react";
import Slider from "react-slick";
import { intToString } from "../../../../CommonLibrary/CommonFunction";
import "./ChipSlider.scss";
const ChipSlider = (props) => {
  const state = {
    display: true,
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const [chips] = useState([
    // "1", "5", "10", "50", "100", "500", "1k", '5k', "10k", "50k", "100k", "500k",
    {
      value: "1",
      index: 1,
      borderColor: "chip1",
    },
    {
      value: "5",
      index: 2,
      borderColor: "chip2",
    },
    {
      value: "10",
      index: 3,
      borderColor: "chip3",
    },
    {
      value: "50",
      index: 4,
      borderColor: "chip4",
    },
    {
      value: "100",
      index: 5,
      borderColor: "chip1",
    },
    {
      value: "500",
      index: 6,
      borderColor: "chip2",
    },
    {
      value: "1000",
      index: 7,
      borderColor: "chip3",
    },
    {
      value: "5000",
      index: 8,
      borderColor: "chip4",
    },
    {
      value: "10000",
      index: 9,
      borderColor: "chip1",
    },
    {
      value: "50000",
      index: 10,
      borderColor: "chip2",
    },
    {
      value: "100000",
      index: 11,
      borderColor: "chip3",
    },
    {
      value: "500000",
      index: 12,
      borderColor: "chip4",
    },
  ]);
  return (
    <div
      className="slider_main"
      style={{
        display: state.display ? "block" : "none",
      }}
    >
      <Slider {...settings}>
        {chips.map((ChipSlider, index) => (
          <div
            key={ChipSlider.index}
            className={`chip ${ChipSlider.borderColor} `}
            onClick={() => props.handleChip(ChipSlider.value)}
          >
            {intToString(ChipSlider.value)}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ChipSlider;
