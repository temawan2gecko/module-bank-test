import React from "react";
// Machine
import { useMachine } from "@xstate/react";
import videoPlayerMachine from "../../../machines/videoPlayerMachine";
// Components
import { CustomButton } from "../../Common/CustomButton";

export const VideoPlayer: React.FC = () => {
  const [state, send] = useMachine(videoPlayerMachine);

  const isHidden = state.matches("hidden");

  return (
    <>{isHidden && <CustomButton onClick={() => send({ type: "SHOW" })} />}</>
  );
};
