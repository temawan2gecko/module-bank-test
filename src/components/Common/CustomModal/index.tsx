import { Modal, ModalProps } from "antd";
import React, { CSSProperties } from "react";

interface CustomModalProps extends ModalProps {
  onClose: () => void;
}

const modalStyle: CSSProperties = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  margin: 0,
  opacity: 0,
  transition: "opacity 0.3s ease-in-out",
};

export const CustomModal: React.FC<CustomModalProps> = ({
  children,
  onClose,
  open,
  width,
  ...rest
}) => {
  return (
    <Modal
      {...rest}
      open={open}
      onCancel={onClose}
      footer={null}
      closable={false}
      width={width}
      bodyStyle={{ padding: 0 }}
      transitionName=""
      maskTransitionName=""
      style={{
        ...modalStyle,
        opacity: open ? 1 : 0,
      }}
      maskStyle={{
        transition: "opacity 0.3s ease-in-out",
        opacity: open ? 1 : 0,
      }}
    >
      {children}
    </Modal>
  );
};
