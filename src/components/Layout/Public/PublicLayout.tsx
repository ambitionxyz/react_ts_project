import React from "react";
import { useOutlet } from "react-router-dom";

import { MainLayoutStyle, PublicLayoutStyle } from "./PublicLayout.style";
import HeaderPage from "./components/Header";
import FooterPage from "./components/Footer";
import FloatNavigatorComponent from "./components/FloatNavigator";

const PublicLayout: React.FC = () => {
  const outlet = useOutlet();

  return (
    <PublicLayoutStyle>
      <MainLayoutStyle>
        {/* <HeaderPage /> */}
        <div className="wrap-content">{outlet}</div>
        {/* <FooterPage /> */}
      </MainLayoutStyle>
      {/* <FloatNavigatorComponent /> */}
    </PublicLayoutStyle>
  );
};

export default PublicLayout;
