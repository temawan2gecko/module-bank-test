import React from "react";
// Machine
import { useMachine } from "@xstate/react";
import videoPlayerMachine from "../../../machines/videoPlayerMachine";
// Components
import { CustomButton } from "../../Common/CustomButton";
import { VideoContent } from "../VideoContent";
import { VideoControls } from "../VideoControls";
import { CustomModal } from "../../Common/CustomModal";

const VIDEO_URL = import.meta.env.VITE_VIDEO_URL || "";

export const VideoPlayer: React.FC = () => {
  const [state, send] = useMachine(videoPlayerMachine);
  const { isPlaying } = state.context;

  const isHidden = state.matches("hidden");
  const isExpanded = state.matches({ active: "expanded" });
  const isMinimized = state.matches({ active: "minimized" });

  const handleTogglePause = () => {
    if (isPlaying) {
      send({ type: "PAUSE" });
    } else {
      send({ type: "PLAY" });
    }
  };

  return (
    <>
      {isHidden && <CustomButton onClick={() => send({ type: "SHOW" })} />}
      {!isHidden && (
        <CustomModal
          open={!isHidden}
          title="Видео Плеер"
          width={isMinimized ? 500 : 1000}
          onClose={() => send({ type: "HIDE" })}
        >
          <VideoContent videoUrl={VIDEO_URL} isPlaying={isPlaying} />
          <VideoControls
            isPlaying={isPlaying}
            onTogglePause={handleTogglePause}
            isExpanded={isExpanded}
            isMinimized={isMinimized}
            onMinimize={() => send({ type: "MINIMIZE" })}
            onExpand={() => send({ type: "EXPAND" })}
            onHide={() => send({ type: "HIDE" })}
          />
        </CustomModal>
      )}
    </>
  );
};
