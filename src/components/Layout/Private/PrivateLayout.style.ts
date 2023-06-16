import { Layout } from "antd";
import styled from "styled-components";

// import Background from "src/assets/Images/background-image.svg";

export const PrivateLayoutStyle = styled(Layout)`
  height: 100%;
  width: 100%;

  background-size: cover;

  .ant-spin-nested-loading,
  .ant-spin-container,
  .site-layout {
    height: 100%;
    width: 100%;

    .ant-spin-spinning {
      max-height: initial;
    }
  }

  .site-layout {
    background: transparent;

    .ant-layout {
      background: transparent;
    }
  }
`;
