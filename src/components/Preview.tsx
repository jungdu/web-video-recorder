import React from "react";
import styled from "@emotion/styled";

import PreviewController from "components/PreviewController"
import SourceSelector from "components/SourceSelector";

const Self = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -10%);
  background: #101010;
  width: 100%;
  max-width: 700px;
`;

const StyledVideo = styled.video`
  position:absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`

const StyledVideoContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 60%;
`


const Preview: React.FC = () => {
  return <Self>
    <StyledVideoContainer>
      <StyledVideo></StyledVideo>
    </StyledVideoContainer>
    <PreviewController></PreviewController>
    <SourceSelector></SourceSelector>
  </Self>;
};

export default Preview;