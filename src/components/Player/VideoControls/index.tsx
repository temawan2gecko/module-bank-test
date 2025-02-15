import React from "react";
import { Space } from "antd";
import {
  ShrinkOutlined,
  ExpandOutlined,
  CloseOutlined,
  PauseOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons";
import { ControlButton } from "../../Common/ControlButton";
import styles from "./VideoControls.module.css";

type VideoControlsProps = {
  isExpanded: boolean;
  isMinimized: boolean;
  isPlaying: boolean;
  onMinimize: () => void;
  onExpand: () => void;
  onHide: () => void;
  onTogglePause: () => void;
};

export const VideoControls: React.FC<VideoControlsProps> = ({
  isExpanded,
  isMinimized,
  isPlaying,
  onMinimize,
  onExpand,
  onHide,
  onTogglePause,
}) => {
  return (
    <div className={styles.container}>
      <Space size="middle">
        <ControlButton
          type="primary"
          icon={isPlaying ? <PauseOutlined /> : <PlayCircleOutlined />}
          onClick={onTogglePause}
          label={isPlaying ? "Пауза" : "Воспроизвести"}
        />

        {isExpanded && (
          <ControlButton
            type="primary"
            icon={<ShrinkOutlined />}
            onClick={onMinimize}
            label="Свернуть"
          />
        )}

        {isMinimized && (
          <ControlButton
            type="primary"
            icon={<ExpandOutlined />}
            onClick={onExpand}
            label="Развернуть"
          />
        )}

        <ControlButton
          type="primary"
          icon={<CloseOutlined />}
          onClick={onHide}
          label="Закрыть"
        />
      </Space>
    </div>
  );
};
