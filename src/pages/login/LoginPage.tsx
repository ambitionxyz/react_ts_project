import React from "react";
import styled from "styled-components";
import { Col, Layout, Row, Typography } from "antd";

const { Content } = Layout;
const { Text } = Typography;

const LoginPage: React.FC = () => {
  return (
    <LoginPageStyle>
      <div className="row-content">
        <div className="content-main">
          <div className="content-banner">
            <img
              className="content-banner-img"
              src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
            />
            <Text className="content-title">
              Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống
              của bạn.
            </Text>
          </div>
          <div className="wrap-content-form">
            <div className="content-form"></div>
          </div>
        </div>
      </div>
    </LoginPageStyle>
  );
};

export default LoginPage;

const LoginPageStyle = styled.div`
  background-color: #e9eeee;
  width: 100%;
  height: 100%;

  .row-content {
    display: flex;
    justify-content: center;

    box-sizing: content-box;
    height: 536px;
    padding: 72px 0 112px 0;

    .content-main {
      display: flex;
      align-items: center;
      box-sizing: content-box;
      width: 980px;
      height: 496px;
      padding: 20px 0 20px 0;

      .content-banner {
        margin-top: -145px;
        display: flex;
        flex-direction: column;
        width: 580px;
        padding-right: 32px;

        .content-banner-img {
          margin-left: -28px;
          width: 301px;
          height: 106px;
        }

        .content-title {
          line-height: 32px;
          font-size: 28px;
          width: 500px;
        }
      }
    }

    .wrap-content-form {
      margin-top: 80px;
      width: 396px;
      height: 496px;
      .content-form {
        background-color: #fff;

        height: 314px;
        border-radius: 10px;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
          rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
      }
    }
  }
`;
