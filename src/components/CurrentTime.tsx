import React from 'react';
import styled from '@emotion/styled';
import { formatMinSec } from 'utils/foramt';
import { useRecoilValue } from 'recoil';
import { recordingAtom } from 'recoilStates/recordState';
import { useDuration } from 'hooks';

interface CurrentTimeProps {
  className?: string;
}

const StyledCurrentTime = styled.div<{ recording: boolean }>`
  color: ${({ recording }) =>
    recording ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.4)'};
  font-size: 22px;
`;

const CurrentTime: React.FC<CurrentTimeProps> = () => {
  const recording = useRecoilValue(recordingAtom);
  const duration = useDuration(recording);

  return (
    <StyledCurrentTime recording={recording}>
      {formatMinSec(duration)}
    </StyledCurrentTime>
  );
};

export default CurrentTime;
