import React from "react";
import { Spin, Layout } from "antd";
import { useOutlet } from "react-router-dom";

import { PrivateLayoutStyle } from "./PrivateLayout.style";

const PrivateLayout: React.FC = () => {
  const outlet = useOutlet();
  return (
    <>
      <PrivateLayoutStyle>
        <Layout className="site-layout">
          <div className="wrap-content">{outlet}</div>
        </Layout>
      </PrivateLayoutStyle>
    </>
  );
};

export default PrivateLayout;
