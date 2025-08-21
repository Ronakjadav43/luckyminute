import React from "react";
import "./PageNotSpotted.scss";

const PageNotSpotted = () => {
    return (
        <div className="page_not_spotted_main">
            <div className="page_not_spotted">
                <div className="page_not_spotted_img">
                    <img src="/img/PageNote.png" />
                </div>
                <span className="page_not_spotted_text">
                    Sorry, but you can't visit <strong>LuckyMinute</strong> website by
                    this handset. Your phone does not support it.
                </span>
                <span className="page_not_spotted_text">
                    Contact: <a>11mscit074@gmail.com</a>
                </span>
            </div>
        </div>
    );
};

export default PageNotSpotted;
