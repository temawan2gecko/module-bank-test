import React from "react";
import ReactPlayer from "react-player";
import styles from "./VideoContent.module.css";

type VideoContentProps = {
  videoUrl: string;
  isPlaying: boolean;
};

export const VideoContent: React.FC<VideoContentProps> = ({ videoUrl, isPlaying }) => {
  return (
    <div className={styles.container}>
      <ReactPlayer
        url={videoUrl}
        playing={isPlaying}
        controls
        width="100%"
        height="100%"
        className={styles.player}
        config={{
          file: {
            attributes: {
              controlsList: "nodownload",
            },
          },
        }}
      />
    </div>
  );
};
