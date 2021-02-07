import React from "react";
import styled from "@emotion/styled";

import {centerCss, centerYCss} from "utils/style"

const Self = styled.div`
  position: relative;
  width: 100%;
  height: 75px;
`;

const RecordButton = styled.div`
  ${centerCss}
  width: 52px;
  height: 52px;
  background: #E62117;
  border-radius: 50%;
  cursor: pointer;
`

const CurrentTime = styled.span`
  ${centerYCss}
  right: 15px;
  color: white;
  font-size: 22px;
`

const PreviewController: React.FC = () => {
  return <Self>
    <RecordButton></RecordButton>
    <CurrentTime>00:00</CurrentTime>
  </Self>;
};

export default PreviewController;