import styled from "styled-components";
import { Layout, Space } from "antd";

const { Header, Footer, Sider, Content } = Layout;

export const BannerStyle = styled(Content)`
  display: flex;
  justify-content: center;
  background-image: url("https://img.nimo.tv/o/banner/EA86C6491CDA55937159F592047CAABF_31b154c6e74e085bffddffa2c4a45fcf.jpg/l0/img.webp");
  height: 749px;

  .wrap-content {
    padding: 0px;
  }
`;

export const FocusStyle = styled.div`
  display: flex;
  width: 1400px;
  height: 709.375px;
  padding: 20px 0 20px 0;

  .focus_flay {
    background-image: url("https://kenh14cdn.com/203336854389633024/2021/8/13/-16288452393801288406942.jpg");
    width: 85%;
    height: inherit;
  }

  .focus_nav {
    position: relative;
    top: -5px;

    flex: 1;
    margin-left: 10px;
    height: inherit;

    .focus_nav-item {
      position: relative;
      height: 119.48px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;

      &:hover {
        border: 1px solid #fff;
        border-radius: 5px;
      }
      &:hover::after {
        display: block;
      }
      &::after {
        display: none;
        width: 0;
        height: 0;
        border-top: 7px solid transparent;
        border-right: 7px solid #fff;
        border-bottom: 7px solid transparent;
        position: absolute;
        top: 45%;
        left: -8px;
        content: "";
        color: #fff;
      }

      .focus_nav-item-inside {
        height: 101.06px;
        width: 100%;
        background-image: url(https://kenh14cdn.com/203336854389633024/2021/8/13/-1628845243411102325514.jpg);
        background-size: cover;
      }
    }
  }
`;
