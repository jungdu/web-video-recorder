import React from "react";
import styled from "@emotion/styled";

import {VideoCamButton as VideoCamButtonOrig, ScreenButton as ScreenButtonOrig} from "components/SourceSelectorButton"

const VideoCamButton = styled(VideoCamButtonOrig)`
  right: 65%;
`

const ScreenButton = styled(ScreenButtonOrig)`
  left: 65%;
`

const Self = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:rgba(0,0,0, 0.7);
`;

const SourceSelector: React.FC = () => {
  return <Self>
    <VideoCamButton></VideoCamButton>
    <ScreenButton></ScreenButton>
  </Self>;
};

export default SourceSelector;