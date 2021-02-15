import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import { recordedBlobAtom } from 'recoilStates/recordState';

import DownloadButton from 'components/DownloadButton';

const StyledDownloadButton = styled(DownloadButton)`
  margin-left: auto;
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  font-size: 25px;
  margin-bottom: 20px;
`;

const StyledRecordedVideo = styled.div`
  margin: 0 auto;
  max-width: 700px;
`;

const StyledVideoContainer = styled.div`
  width: 100%;
  background: #101010;
`;

const StyledVideo = styled.video`
  width: 100%;
`;
const RecordedVideo: React.FC = () => {
  const videoRef = useRef<null | HTMLVideoElement>(null);
  const [recordedBlob] = useRecoilState(recordedBlobAtom);

  useEffect(() => {
    if (recordedBlob) {
      if (videoRef.current) {
        videoRef.current.src = window.URL.createObjectURL(recordedBlob);
        videoRef.current.onloadedmetadata = () => {
          if (videoRef.current && videoRef.current.duration === Infinity) {
            videoRef.current.currentTime = 1e101;
          }
        };
      } else {
        throw new Error('no videoRef current');
      }
    }
  }, [recordedBlob]);

  return (
    <StyledRecordedVideo>
      <StyledHeader>
        녹화된 영상
        <StyledDownloadButton />
      </StyledHeader>
      <StyledVideoContainer>
        <StyledVideo ref={videoRef} controls />
      </StyledVideoContainer>
    </StyledRecordedVideo>
  );
};

export default RecordedVideo;
