import React from "react";
import { Image } from "antd";
import { BannerStyle, FocusStyle } from "./Banner.style";

const BannerComponent: React.FC = () => {
  return (
    <BannerStyle>
      <FocusStyle>
        <div className="focus_flay">hello</div>
        <div className="focus_nav">
          <div className="focus_nav-item">
            <div className="focus_nav-item-inside"></div>
          </div>
          <div className="focus_nav-item">
            <div className="focus_nav-item-inside"></div>
          </div>
          <div className="focus_nav-item">
            {" "}
            <div className="focus_nav-item-inside"></div>
          </div>
          <div className="focus_nav-item">
            {" "}
            <div className="focus_nav-item-inside"></div>
          </div>
          <div className="focus_nav-item">
            {" "}
            <div className="focus_nav-item-inside"></div>
          </div>
          <div className="focus_nav-item">
            {" "}
            <div className="focus_nav-item-inside"></div>
          </div>
        </div>
      </FocusStyle>
    </BannerStyle>
  );
};

export default BannerComponent;
