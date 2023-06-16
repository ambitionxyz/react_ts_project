import React, { useMemo, useState } from "react";
import {
  Col,
  Row,
  Typography,
  Image,
  Menu,
  Button,
  Input,
  TabsProps,
  Divider,
  Space,
  Form,
} from "antd";
import { useTranslation } from "react-i18next";
import {
  HeaderLeft,
  HeaderRight,
  HeaderStyled,
  ModelItem,
} from "./Header.style";
import { Link, useLocation } from "react-router-dom";
import { ROUTER_PATH } from "../../../../constants/routers/constans";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import ModalComponent from "../../../components/Modal/Modal";
import TabMenu from "../../../components/TabMenu/TabMenu";

const { Paragraph, Text } = Typography;

const HeaderPage: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const { Search } = Input;
  const onSearch = (value: string) => console.log(value);
  const selectedItem = useMemo(() => {
    const splitPath = location.pathname.split("/");
    if (splitPath.length > 2) {
      return `/${splitPath[1]}`;
    }
    return location.pathname;
  }, [location]);

  const MENU_ITEMS = [
    {
      key: ROUTER_PATH.HOME,
      label: (
        <Link className="link" to={ROUTER_PATH.HOME}>
          <Text>{t("common.menu.home")}</Text>
        </Link>
      ),
    },
    {
      key: ROUTER_PATH.LIVE,
      label: (
        <Link className="link" to={ROUTER_PATH.LIVE}>
          <Text>{t("common.menu.live")}</Text>
        </Link>
      ),
    },
    {
      key: ROUTER_PATH.LIVE_SHOW,
      label: (
        <Link className="link" to={ROUTER_PATH.LIVE_SHOW}>
          <Text>{t("common.menu.liveShow")}</Text>
        </Link>
      ),
    },
    {
      key: ROUTER_PATH.GAME,
      label: (
        <Link className="link" to={ROUTER_PATH.GAME}>
          <Text>{t("common.menu.game")}</Text>
        </Link>
      ),
    },
  ];
  // Tạo biến để lưu JSX của một div

  const contentItem: JSX.Element = (
    <ModelItem>
      <div className="model_item-1">
        <Form></Form>
      </div>
      <Divider className="divider_item" type="vertical" />

      <div className="model_item-2">phai</div>
    </ModelItem>
  );

  const items = [
    {
      label: (
        <Image
          height={28}
          width={92}
          preview={false}
          src="https://banner2.cleanpng.com/20180420/poe/kisspng-lynx-london-road-public-school-logo-lavington-elem-5ad9d55e1d4975.83025042152422537412.jpg"
        />
      ),
      disabled: true,
      key: "0",
    },

    {
      label: `Login`,
      key: "1",
      children: contentItem,
    },
    {
      label: `Sign up`,
      key: "2",
      children: contentItem,
    },
  ];

  const handleOK = async (): Promise<void> => {
    console.log("handleOKE");
  };

  return (
    <>
      <HeaderStyled>
        <HeaderLeft>
          <div className="logo">
            <Image
              preview={false}
              src="https://banner2.cleanpng.com/20180420/poe/kisspng-lynx-london-road-public-school-logo-lavington-elem-5ad9d55e1d4975.83025042152422537412.jpg"
            />
          </div>
          <Menu
            className="menu"
            mode="horizontal"
            items={MENU_ITEMS}
            selectedKeys={[selectedItem]}
          />
        </HeaderLeft>
        <HeaderRight>
          <div className="header_right-search">
            <Input
              className="header_right_search-input"
              placeholder="default size"
              prefix={<SearchOutlined />}
            />
          </div>
          <div className="header_right-auth">
            <Button className="ant-btn-default btn-1">Sign up</Button>
            <Button className="ant-btn-default btn-2">Log in</Button>
          </div>
        </HeaderRight>
      </HeaderStyled>
      {/* <ModalComponent
        isOpen={true}
        modalProps={
          {
            // okText: "OK",
            // onOk: () => {},
            // onCancel: () => () => {},
          }
        }
      >
        <TabMenu tabs={items} size={"small"} />
      </ModalComponent> */}
    </>
  );
};

export default HeaderPage;
