import React from "react";
import { Button } from "antd";
import styles from "./ControllButton.module.css";

type ControlButtonProps = {
  icon: React.ReactNode;
  onClick: () => void;
  label: string;
  type?:
    | "primary"
    | "default"
    | "link"
    | "text"
    | "ghost"
    | "dashed"
    | undefined;
};

export const ControlButton: React.FC<ControlButtonProps> = ({
  icon,
  onClick,
  label,
  type = "default",
}) => (
  <Button type={type} onClick={onClick} className={styles.button}>
    <span className={styles.icon}>{icon}</span>
    <span className={styles.label}>{label}</span>
  </Button>
);
