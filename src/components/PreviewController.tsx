import React, { useEffect } from "react";
import styled from "@emotion/styled";

import {formatMinSec} from "utils/foramt"
import {centerCss, centerYCss} from "utils/style"
import { useRecoilState } from "recoil";
import { recordingAtom } from "recoil/recordState";
import { useDuration } from "hooks";
import { css } from "@emotion/react";

const Self = styled.div`
  position: relative;
  width: 100%;
  height: 75px;
`;

const RecordButton = styled.div<{recording: boolean}>`
  ${centerCss}
  background: #E62117;
  cursor: pointer;
  transition: all 160ms;

  ${({recording}) => recording ? css`
    width: 32px;
    height: 32px;
    border-radius: 3px;
  `: css`
    width: 48px;
    height: 48px;
    border-radius: 50%;
  `}
`

const CurrentTime = styled.span<{recording: boolean}>`
  ${centerYCss}
  right: 15px;
  color: ${({recording}) => recording ? "rgba(255, 255, 255, 0.9)": "rgba(255, 255, 255, 0.4)"};
  font-size: 22px;
`

const PreviewController: React.FC = () => {
  const [recording, setRecording] = useRecoilState(recordingAtom);
  const {duration, setCounting} = useDuration();
  
  const handleToggleRecord = () => {
    setRecording(currentVal => !currentVal);
  }

  useEffect(() => {
    if(recording){
      setCounting(true);
    }else{
      setCounting(false);
    }
  }, [recording]);

  return <Self>
    <RecordButton onClick={handleToggleRecord} recording={recording}></RecordButton>
    <CurrentTime recording={recording}>{formatMinSec(duration)}</CurrentTime>
  </Self>;
};

export default PreviewController;