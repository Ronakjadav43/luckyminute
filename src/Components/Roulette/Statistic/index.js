import React from "react";
import "./Statistic.scss";
import { ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Statistic = () => {
  const now2 = 4;
  const red = 50;
  const white = 46;
  const odd = 54;
  const even = 42;
  const low = 38;
  const high = 58;
  return (
    <div className="main_layout">
      <div className="main_layout_inner">
        <div className="gamestatistic">
          <div className="statistic_progressbar">
            <ProgressBar>
              <ProgressBar
                striped
                className="progressbar_red"
                now={`${red}`}
                key={1}
                label={`Red${red}%`}
              />
              <ProgressBar
                className="progressbar_warning"
                now={`${now2}`}
                key={2}
              />
              <ProgressBar
                striped
                className="progressbar_white"
                now={`${white}`}
                key={3}
                label={`${white}%White`}
              />
            </ProgressBar>

            <ProgressBar>
              <ProgressBar
                striped
                className="progressbar_odd"
                now={`${odd}`}
                key={1}
                label={`Odd${odd}%`}
              />
              <ProgressBar
                className="progressbar_warning"
                now={`${now2}`}
                key={2}
              />
              <ProgressBar
                striped
                className="progressbar_even"
                now={`${even}`}
                key={3}
                label={`${even}%Even`}
              />
            </ProgressBar>

            <ProgressBar>
              <ProgressBar
                striped
                className="progressbar_odd"
                now={`${low}`}
                key={1}
                label={`Low${low}%`}
              />
              <ProgressBar
                className="progressbar_warning"
                now={`${now2}`}
                key={2}
              />
              <ProgressBar
                striped
                className="progressbar_even"
                now={`${high}`}
                key={3}
                label={`${high}%High`}
              />
            </ProgressBar>

            <div className="hot_div">
              <span className="hot_text">Hot</span>
              <div className="red_chip">3</div>
              <div className="white_chip">8</div>
              <div className="red_chip">9</div>
              <div className="red_chip">1</div>
            </div>

            <div className="cool_div">
              <span className="hot_text">Cool</span>
              <div className="red_chip warning">0</div>
              <div className="white_chip">6</div>
              <div className="red_chip">5</div>
              <div className="white_chip">11</div>
            </div>
          </div>
          <div className="statistic_chips">
            <div className="red_chips">3</div>
            <div className="white_chips">8</div>
            <div className="red_chips">9</div>
            <div className="white_chips">11</div>
            <div className="red_chips">1</div>
            <div className="red_chips warning">0</div>
            <div className="white_chips">6</div>
            <div className="red_chips">5</div>
            <div className="white_chips">6</div>
            <div className="red_chips">5</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
