import React, { useEffect, useRef, useState } from "react";
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
  width: 100%;
`

const StyledVideoContainer = styled.div`
  position: relative;
  width: 100%;
`

const Preview: React.FC = () => {
  const [currentStream, setCurrentStream] = useState<MediaStream | null>(null);
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