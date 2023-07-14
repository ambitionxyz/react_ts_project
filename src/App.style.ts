import styled from "styled-components";

export const AppStyle = styled.section`
  margin: 0;
  font-family: "Kardust", "Roboto", sans-serif;
  height: 100vh;
  width: 100vw;
  color: #fff;

  /* TYPOGRAPHY */
  .ant-typography {
    color: #010101;
  }

  .ant-typography.linear-text {
    background: linear-gradient(to right, #61aba4 0%, #2dd9ff 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
  }

  /* BUTTON */
  .ant-btn {
  }
  .ant-btn-default {
    /* border-radius: 10px; */
    color: #ffff !important;
    color: rgba(217, 217, 217, 0.5);
    background-color: transparent;
    border-color: #fff;

    &:hover {
      background-color: #7859ff;
      color: #fff;
    }
  }
  .ant-btn-default.active {
    background-image: linear-gradient(to right, #61aba4 0%, #2dd9ff 100%);
    color: #010101;
  }

  /* MENU */
  .ant-menu {
    .ant-menu-item {
      .ant-menu-title-content {
        padding-left: 12px;
      }

      &:hover {
      }

      &.ant-menu-item-selected {
        background: linear-gradient(to right, #61aba4 0%, #2dd9ff 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        color: transparent;
      }
    }
  }
`;
