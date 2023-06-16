import React from "react";
import { Modal, Layout, ModalProps, ButtonProps, Button, Image } from "antd";
import styled from "styled-components";
import { CloseOutlined } from "@ant-design/icons";

const { Content, Footer } = Layout;

export interface IModalProps {
  isOpen: boolean;
  // title: string | React.ReactNode;
  children?: string | React.ReactNode;
  wrapClassName?: string;
  modalProps?: ModalProps & {
    cancelButtonProps?: ButtonProps;
  };
}

const ModalComponent: React.FC<IModalProps> = ({
  isOpen,
  wrapClassName = "",
  children,
  modalProps,
  // title,
}) => {
  return (
    <ModalStyle
      wrapClassName={`${wrapClassName} modal-wrap`}
      // title={title}
      open={isOpen}
      footer={null}
      closeIcon={
        <CloseOutlined style={{ fontSize: "16px", color: "#fffff" }} />
      }
      onCancel={modalProps?.onCancel}
      destroyOnClose
      {...modalProps}
    >
      <Content className="common-content">{children || null}</Content>

      {/* <Footer className="ant-modal-footer">
        {modalProps?.okText && modalProps?.onOk ? (
          <Button
            disabled={modalProps.okButtonProps?.disabled}
            htmlType="button"
            type="primary"
            onClick={() => modalProps?.onOk}
          >
            {modalProps?.okText}
          </Button>
        ) : (
          ""
        )} */}

      {/* {modalProps?.cancelText && modalProps?.onCancel ? (
          <Button
            htmlType="button"
            type="default"
            onClick={() => modalProps?.onCancel}
          >
            {modalProps?.cancelText}
          </Button>
        ) : (
          ""
        )} */}
      {/* </Footer> */}
    </ModalStyle>
  );
};

export default ModalComponent;

const ModalStyle = styled(Modal)`
  font-family: "Kardust", "Roboto", sans-serif;

  .ant-modal-content {
    padding: 0;
    background: #222121;
    border-radius: 10px;
    border: 1px solid transparent;
    overflow: hidden;
    color: #ffffff;
    min-width: 572px;
    height: 395px;

    .ant-modal-close {
      color: #ffffff;
    }

    /* MODAL HEADER */
    .ant-modal-header {
      background: inherit;
    }

    .title-logo {
      width: 92px;
      height: 28px;
    }
  }
`;
