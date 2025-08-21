import { Button } from "@material-ui/core";
import React from "react";
import Header from "../Header";
import MainHeader from "../MainHeader";
import PageNotSpotted from "../PageNotSpotted";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

import "./Languages.scss";

const Languages = () => {
  return (
    <div>
      <div className="languages">
        <MainHeader name="Language" />

        <FormControl component="fieldset" className="languages_inner">
          <RadioGroup
            aria-label="gender"
            name="gender1"
            className="languages_info"
          >
            <span className="info_text">
              <span className="texts">English</span>
              <FormControlLabel value="female" control={<Radio />} />
            </span>

            <span className="info_text">
              <span className="texts"> 简体中文</span>
              <FormControlLabel value="male" control={<Radio />} />
            </span>
          </RadioGroup>
        </FormControl>

        <Button variant="contained" className="languages_btn">
          Apply
        </Button>
      </div>
      <PageNotSpotted />
    </div>
  );
};

export default Languages;
