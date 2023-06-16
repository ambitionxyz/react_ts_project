import { Layout } from "antd";
import styled from "styled-components";

// import Background from "src/assets/Images/background-image.svg";

export const PublicLayoutStyle = styled(Layout)`
  height: 100%;
  width: 100%;
  background-size: cover;
  background-color: #000;

  .ant-spin-nested-loading,
  .ant-spin-container,
  .site-layout {
    height: 100%;
    width: 100%;
  }
`;

export const MainLayoutStyle = styled(Layout)`
  display: block;
  background-color: inherit;

  /* .wrap-content {
    padding: 15px;
    height: calc(100% - 60px);
  } */
`;
