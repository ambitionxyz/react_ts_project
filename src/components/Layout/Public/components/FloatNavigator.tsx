import React from "react";
import styled from "styled-components";
import { Layout } from "antd";

const { Content } = Layout;
const FloatNavigatorComponent: React.FC = () => {
  return <FloatNavigatorStyle>day la float</FloatNavigatorStyle>;
};

export default FloatNavigatorComponent;

const FloatNavigatorStyle = styled(Content)`
  position: fixed;
  top: 50vh;
  left: 96vw;
  width: 54px;
  height: 274px;
  background-color: #1d1c1c;
`;
