import React from 'react';
import styled from '@emotion/styled';
import micOff from 'images/mic_off.svg';
import micOn from 'images/mic_on.svg';
import { useAudioStream } from 'hooks';

interface AudioSourceButtonProps {
  className?: string;
}

const StyledAudioSourceButton = styled.div<{ enabled: boolean }>`
  width: 38px;
  height: 38px;
  background-image: url(${({ enabled }) => (enabled ? micOff : micOn)});
  background-size: cover;
  cursor: pointer;
  opacity: 0.4;
  transition: all 160ms;

  &:hover {
    opacity: 1;
  }
`;

const AudioSourceButton: React.FC<AudioSourceButtonProps> = ({ className }) => {
  const { audioTrack, enabled, setEnabled } = useAudioStream();

  const handleClick = () => {
    setEnabled(!enabled);
  };

  console.log('enabled :', enabled);

  return (
    audioTrack && (
      <StyledAudioSourceButton
        className={className}
        onClick={handleClick}
        enabled={enabled}
      />
    )
  );
};

export default AudioSourceButton;
