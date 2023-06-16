import { Layout } from "antd";
import styled from "styled-components";

const { Content } = Layout;

export const HeaderStyled = styled(Content)`
  display: flex;
  margin: 0 auto;
  width: 1912px;
  height: 60px;
  padding: 0 15px;
  background-color: #1d1c1c;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  width: 527.53px;

  .logo {
    width: 136px;
  }

  .menu {
    color: #fff;
    width: 100%;
    margin: 0 55px 0 55px;
    color: #fff;
    background-color: inherit;
  }
  .ant-typography {
    color: #ffff;
    font-size: 15px;
    font-weight: 600;
  }
`;
export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;

  .header_right-search {
    width: 562.95px;

    .header_right_search-input {
      background-color: #fff;
      border-radius: 50px;
      border: none;

      /* input[type="text"] {
        background-color: #5b5b5b;
      } */
    }
  }

  .header_right-auth {
    .btn-1 {
      margin-left: 12px;
    }
    .btn-2 {
      margin-left: 12px;
    }
  }
`;

export const ModelItem = styled.div`
  display: flex;
  height: 289px;
  padding: 14px 0 14px 0;

  .model_item-1 {
    height: 100%;
    width: 280px;
    margin: 0 42px 0 42px;

    .ant-space {
      width: inherit;
    }
  }

  .divider_item {
    height: inherit;
    background-color: #fff;
  }
`;
