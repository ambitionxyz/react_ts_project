import React from "react";
import { Tabs } from "antd";
import styled from "styled-components";

interface ITabs {
  label: string | React.ReactNode;
  key: string;
  children?: React.ReactNode;
}

export interface IProps {
  tabs: ITabs[];
  spaceTab?: number;
  size: "small" | "middle" | "large";
  activeKey?: string;
}
const TabMenu: React.FC<IProps> = ({
  tabs,
  spaceTab,
  size,
  activeKey,
}): React.ReactElement => {
  return (
    <TabMenuStyle
      defaultActiveKey={activeKey || "1"}
      items={tabs}
      tabBarGutter={spaceTab}
      size={size}
    />
  );
};

const TabMenuStyle = styled(Tabs)`
  .ant-tabs-nav {
    width: 100%;
    color: #8b8989;
    /* 
    &::before {
    } */

    .ant-tabs-nav-wrap {
      .ant-tabs-nav-list {
        display: flex;
        align-items: center;
        height: 48px;
        padding: 12px 30px 0 30px;

        /* &::before {
          content: none;
        } */

        .ant-tabs-tab {
          /* min-width: 120px; */
          justify-content: center;
          padding-bottom: 20px;
          height: 36px;
          font-size: 14px;
          font-weight: 500;
          /* .ant-tabs-tab-btn {
            justify-content: center;
          } */
        }

        .ant-tabs-tab-active {
          color: #8b8989;

          .ant-tabs-tab-btn {
            color: #ffffff;
          }
        }

        .ant-tabs-ink-bar {
          background: #ffffff;
        }
      }
    }
  }
`;

export default TabMenu;
