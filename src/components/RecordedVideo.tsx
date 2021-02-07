import React from "react";
import styled from "@emotion/styled";

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
  return <Self>
    <h2>저장된 영상</h2>
    <StyledVideoContainer>
      <StyledVideo/>
    </StyledVideoContainer>
  </Self>;
};

export default RecordedVideo;