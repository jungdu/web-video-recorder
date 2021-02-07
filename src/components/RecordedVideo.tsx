import React, { useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { recordedBlobAtom } from "recoil/recordState";

const Self = styled.div`
  margin: 0 auto;
  max-width: 700px;
`;

const StyledVideoContainer = styled.div`
  width: 100%;
  background: #101010;
`

const StyledVideo = styled.video`
  width: 100%;
`
const RecordedVideo: React.FC = () => {
  const videoRef = useRef<null | HTMLVideoElement>(null);
  const [recordedBlob] = useRecoilState(recordedBlobAtom);

  useEffect(() => {
    if(recordedBlob){
      if(videoRef.current){
        videoRef.current.src = window.URL.createObjectURL(recordedBlob);
      }else{
        throw new Error("no videoRef current")
      }
    }
  }, [recordedBlob])

  return <Self>
    <h2>저장된 영상</h2>
    <StyledVideoContainer>
      <StyledVideo ref={videoRef} controls/>
    </StyledVideoContainer>
  </Self>;
};

export default RecordedVideo;