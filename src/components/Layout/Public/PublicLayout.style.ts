import { Layout } from "antd";
import styled from "styled-components";

import Background from "src/assets/Images/background-image.svg";

export const PublicLayoutStyle = styled(Layout)`
  height: 100%;
  width: 100%;
  background: url(${Background}) no-repeat;
  background-size: cover;

  .ant-spin-nested-loading,
  .ant-spin-container,
  .site-layout {
    height: 100%;
    width: 100%;
  }
`;
