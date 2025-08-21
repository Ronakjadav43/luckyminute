import { Button } from "@material-ui/core";
import React from "react";
import Header from "../Header";
import MainHeader from "../MainHeader";
import PageNotSpotted from "../PageNotSpotted";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import VibrationIcon from "@material-ui/icons/Vibration";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";

import "./SoundVibrate.scss";

const SoundVibrate = () => {
  return (
    <div>
      <div className="sound_vibrate">
        <MainHeader name="Sound & Vibrate" />

        <FormControl component="fieldset" className="sound_vibrate_inner">
          <RadioGroup
            aria-label="gender"
            name="gender1"
            className="sound_vibrate_info"
          >
            <span className="info_text">
              <VolumeUpIcon />
              <span className="texts">Sound</span>
              <FormControlLabel value="Sound" control={<Radio />} />
            </span>
            <hr />
            <span className="info_text">
              <VibrationIcon />
              <span className="texts"> Vibrate</span>
              <FormControlLabel value="Vibrate" control={<Radio />} />
            </span>
            <hr />
            <span className="info_text">
              <VolumeOffIcon />
              <span className="texts"> Mute</span>
              <FormControlLabel value="Mute" control={<Radio />} />
            </span>
          </RadioGroup>
        </FormControl>

        <Button variant="contained" className="sound_vibrate_btn">
          Apply
        </Button>
      </div>
      <PageNotSpotted />
    </div>
  );
};

export default SoundVibrate;
