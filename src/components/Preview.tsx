import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';

import { useRecoilState } from 'recoil';
import { currentStreamAtom } from 'recoilStates/recordState';

import PreviewController from 'components/PreviewController';
import SourceSelector from 'components/SourceSelector';

const StyledPreviewContainer = styled.div`
  width: 100%;
  margin: 120px auto 220px;
  max-width: 700px;
`;

const StyledPreview = styled.div`
  background: #101010;
  filter: drop-shadow(0px 9px 15px rgba(0, 0, 0, 0.4));
`;


const StyledVideo = styled.video`
  width: 100%;
`;

const StyledVideoContainer = styled.div`
  position: relative;
  width: 100%;
`;

const Preview: React.FC = () => {
  const [currentStream, setCurrentStream] = useRecoilState(currentStreamAtom);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleGetStream = (stream: MediaStream) => {
    setCurrentStream(stream);
  };

  const handleGetStreamError = (error: Error) => {
    throw error;
  };

  useEffect(() => {
    if (currentStream && videoRef.current) {
      videoRef.current.srcObject = currentStream;
    }
  }, [currentStream]);

  return (
    <StyledPreviewContainer>
      <StyledPreview>
        <StyledVideoContainer>
          <StyledVideo ref={videoRef} autoPlay muted></StyledVideo>
        </StyledVideoContainer>
        <PreviewController></PreviewController>
        {!currentStream && (
          <SourceSelector
            onSetStream={handleGetStream}
            onSetStreamError={handleGetStreamError}
          ></SourceSelector>
        )}
      </StyledPreview>
    </StyledPreviewContainer>
  );
};

export default Preview;
