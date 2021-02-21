import React from 'react';
import styled from '@emotion/styled';

import {
  VideoCamButton as VideoCamButtonOrig,
  ScreenButton as ScreenButtonOrig,
} from 'components/SourceSelectorButton';
import { centerYCss } from 'utils/style';

const StyledSourceSelector = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
`;

const VideoCamButton = styled(VideoCamButtonOrig)`
  ${centerYCss};
  transition: transform 180ms;
  right: 65%;
  opacity: 0.8;

  &:hover {
    transform: translate3d(0, -50%, 0) scale(1.2);
    opacity: 1;
  }
`;

const StyledHeader = styled.div`
  text-align: center;
  font-size: 28px;
  color: rgba(255,255,255, 0.9);
  margin-top: 25px;
  letter-spacing: 0.8px;
`

const ScreenButton = styled(ScreenButtonOrig)`
  ${centerYCss};
  transition: transform 180ms;
  left: 65%;
  opacity: 0.8;

  &:hover {
    transform: translate3d(0, -50%, 0) scale(1.2);
    opacity: 1;
  }
`;


interface SourceSelectorProps {
  onSetStream: (stream: MediaStream) => void;
  onSetStreamError: (error: Error) => void;
}

const SourceSelector: React.FC<SourceSelectorProps> = ({
  onSetStream,
  onSetStreamError,
}) => {
  return (
    <StyledSourceSelector>
      <StyledHeader>
        Select Source
      </StyledHeader>
      <VideoCamButton
        onSetStream={onSetStream}
        onSetStreamError={onSetStreamError}
      ></VideoCamButton>
      <ScreenButton
        onSetStream={onSetStream}
        onSetStreamError={onSetStreamError}
      ></ScreenButton>
    </StyledSourceSelector>
  );
};

export default SourceSelector;
