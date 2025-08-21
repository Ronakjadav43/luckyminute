import React from "react";
import FooterMenu from "../../../../CommonComponents/FooterMenu";
import Header from "../../../../CommonComponents/Header";
import "./Report.scss";

const SuccessUserReport = (props) => {
  return (
    <div className="agent_layout">
      <Header name={"Player Report"} />
      <div className="agent_body">
        <div className="sub_header">
          <span className="sub_header_text">Player</span>
          <span className="sub_header_text">Hp854876960</span>
        </div>
        <div className="row_details">
          <div className="row_details_inner px_10">
            <span className="row_details_text">Start Date</span>
            <span className="row_details_text">17/01/2022 00:00</span>
          </div>
          <div className="row_details_inner px_10">
            <span className="row_details_text">End Date</span>
            <span className="row_details_text">23/01/2022 23:59</span>
          </div>
          <div className="row_details_inner px_10">
            <span className="row_details_text">Number of Day</span>
            <span className="row_details_text">7</span>
          </div>
        </div>
        <div className="row_details">
          <div className="row_details_inner px_10">
            <span className="row_details_text black">Number of Bets</span>
            <span className="row_details_text">123456</span>
          </div>
          <div className="row_details_inner px_10">
            <span className="row_details_text black">Total Bets</span>
            <span className="row_details_text">123456</span>
          </div>
          <div className="row_details_inner px_10">
            <span className="row_details_text black">Total Payout</span>
            <span className="row_details_text">123456</span>
          </div>
          <div className="row_details_inner px_10 border_black">
            <span className="row_details_text black">Profit</span>
            <span className="row_details_text">123456</span>
          </div>
        </div>
        <div className="row_details">
          <div className="row_details_inner">
            <span className="row_details_text center w_100">Report Generated on 24/01/2022 21:07</span>
          </div>
        </div>
      </div>
      <FooterMenu />
    </div>
  );
};

export default SuccessUserReport;
