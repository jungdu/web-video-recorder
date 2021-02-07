import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";

import { useRecoilState } from "recoil";
import {currentStreamAtom} from "recoil/recordState"

import PreviewController from "components/PreviewController"
import SourceSelector from "components/SourceSelector";

const Self = styled.div`
  margin: 120px auto;
  background: #101010;
  width: 100%;
  max-width: 700px;
  filter: drop-shadow(0px 9px 15px rgba(0, 0, 0, 0.4));
`;

const StyledVideo = styled.video`
  width: 100%;
`

const StyledVideoContainer = styled.div`
  position: relative;
  width: 100%;
`

const Preview: React.FC = () => {
  const [currentStream, setCurrentStream] = useRecoilState(currentStreamAtom)
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleGetStream = (stream: MediaStream) => {
    setCurrentStream(stream);
  }

  const handleGetStreamError = (error: Error) => {
    throw error;
  }

  useEffect(() => {
    if(currentStream && videoRef.current){
      videoRef.current.srcObject = currentStream;
    }
  }, [currentStream])

  return <Self>
    <StyledVideoContainer>
      <StyledVideo ref={videoRef} autoPlay></StyledVideo>
    </StyledVideoContainer>
    <PreviewController></PreviewController>
    {!currentStream && <SourceSelector onGetStream={handleGetStream} onGetStreamError={handleGetStreamError}></SourceSelector>}
  </Self>;
};

export default Preview;