import React from "react";
import styled from "@emotion/styled";

import {VideoCamButton as VideoCamButtonOrig, ScreenButton as ScreenButtonOrig} from "components/SourceSelectorButton"
import { centerYCss } from "utils/style";

const VideoCamButton = styled(VideoCamButtonOrig)`
  ${centerYCss};
  transition: transform 180ms;
  right: 65%;

  &:hover{
    transform: translate3d(0, -50%, 0) scale(1.2);
  }
`

const ScreenButton = styled(ScreenButtonOrig)`
  ${centerYCss};
  transition: transform 180ms;
  left: 65%;

  &:hover{
    transform: translate3d(0, -50%, 0) scale(1.2);
  }
`

const Self = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:rgba(0,0,0, 0.7);
`;

interface SourceSelectorProps {
  onGetStream:(stream: MediaStream) => void;
  onGetStreamError: (error: Error) => void;
}

const SourceSelector: React.FC<SourceSelectorProps> = ({
  onGetStream,
  onGetStreamError,
}) => {
  return <Self>
    <VideoCamButton onGetStream={onGetStream} onGetStreamError={onGetStreamError}></VideoCamButton>
    <ScreenButton onGetStream={onGetStream} onGetStreamError={onGetStreamError}></ScreenButton>
  </Self>;
};

export default SourceSelector;