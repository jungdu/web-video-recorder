import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';

import { formatMinSec } from 'utils/foramt';
import { centerCss, centerYCss } from 'utils/style';
import { useRecoilState } from 'recoil';
import {
  recordingAtom,
  currentStreamAtom,
  recordedBlobAtom,
} from 'recoilStates/recordState';
import { useDuration } from 'hooks';
import { css } from '@emotion/react';
import MediaSourceRecorder from 'utils/MediaSourceRecorder';
import OpenSourceSelectorButton from './OpenSourceSelectorButton';

const Self = styled.div`
  position: relative;
  width: 100%;
  height: 75px;
`;

const StyledOpenSourceSelectorButton = styled(OpenSourceSelectorButton)`
  ${centerYCss};
  left: 27px;
`

const RecordButton = styled.div<{ recording: boolean }>`
  ${centerCss}
  background: #E62117;
  cursor: pointer;
  transition: all 160ms;

  ${({ recording }) =>
    recording
      ? css`
          width: 32px;
          height: 32px;
          border-radius: 3px;
        `
      : css`
          width: 48px;
          height: 48px;
          border-radius: 50%;
        `}
`;

const CurrentTime = styled.span<{ recording: boolean }>`
  ${centerYCss}
  right: 15px;
  color: ${({ recording }) =>
    recording ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.4)'};
  font-size: 22px;
`;

const PreviewController: React.FC = () => {
  const [recording, setRecording] = useRecoilState(recordingAtom);
  const [currentStream] = useRecoilState(currentStreamAtom);
  const [_, setRecordedBlob] = useRecoilState(recordedBlobAtom);
  const { duration, setCounting } = useDuration();
  const recorderRef = useRef<MediaSourceRecorder | null>(null);

  const handleToggleRecord = () => {
    setRecording((currentVal) => !currentVal);
  };

  // TODO 이 로직들도 컴포넌트에 있을 필요는 없다.
  const startRecord = () => {
    if (currentStream) {
      setCounting(true);
      recorderRef.current = new MediaSourceRecorder(currentStream, (blob) => {
        console.log('blob :', blob);
        setRecordedBlob(blob);
      });
      recorderRef.current.start();
    } else {
      throw new Error('No stream to record');
    }
  };

  const endRecord = () => {
    setCounting(false);
    if (recorderRef.current) {
      recorderRef.current.stop();
    }
  };

  useEffect(() => {
    if (recording) {
      startRecord();
    } else {
      endRecord();
    }
  }, [recording]);

  return (
    <Self>
      <StyledOpenSourceSelectorButton />
      <RecordButton
        onClick={handleToggleRecord}
        recording={recording}
      ></RecordButton>
      <CurrentTime recording={recording}>{formatMinSec(duration)}</CurrentTime>
    </Self>
  );
};

export default PreviewController;
