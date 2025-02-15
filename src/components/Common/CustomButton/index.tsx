import React from 'react';
import { PlayCircleOutlined } from '@ant-design/icons';
import { Button, Typography } from 'antd';
import styles from './CustomButton.module.css';

type CustomButtonProps = {
  onClick: () => void
};

export const CustomButton: React.FC<CustomButtonProps> = ({onClick}) => {
  return (
    <div className={styles.container} onClick={onClick}>
      <Button
        className={styles.customButton}
        icon={<PlayCircleOutlined className={styles.anticon_play_circle}/>}
      />
      <Typography.Title level={5} style={{color: "#1677ff"}}>Нажмите, чтобы открыть плеер</Typography.Title>
    </div>
  );
};