import React from "react";
import { Divider, Layout } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { ROUTER_PATH } from "../../../constants";

const NotFound: React.FC = () => {
  return (
    <NotFoundStyle>
      <Divider>Page Not Found Page</Divider>
      <Link to={ROUTER_PATH.DASHBOARD}>
        <u>Go to dashboard</u>
      </Link>
    </NotFoundStyle>
  );
};

export default NotFound;

export const NotFoundStyle = styled(Layout)`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
