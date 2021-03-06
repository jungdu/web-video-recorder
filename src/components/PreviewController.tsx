import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { centerCss, centerYCss } from 'utils/style';
import { useRecoilState } from 'recoil';
import {
  recordingAtom,
  currentStreamAtom,
  recordedBlobAtom,
} from 'recoilStates/recordState';
import { css } from '@emotion/react';
import MediaSourceRecorder from 'utils/MediaSourceRecorder';
import OpenSourceSelectorButton from './OpenSourceSelectorButton';
import AudioSourceButton from './AudioSourceButton';
import CurrentTime from './CurrentTime';

const Self = styled.div`
  position: relative;
  width: 100%;
  height: 75px;
`;

const StyledCurrentTime = styled(CurrentTime)`
  margin-left: auto;
`;

const StyledOpenSourceSelectorButton = styled(OpenSourceSelectorButton)`
  ${centerYCss};
  left: 27px;
`;

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

const RightControls = styled.div`
  ${centerYCss}
  right: 15px;
  display: inline-flex;
  width: 105px;
  align-items: center;
`;

const PreviewController: React.FC = () => {
  const [recording, setRecording] = useRecoilState(recordingAtom);
  const [currentStream] = useRecoilState(currentStreamAtom);
  const [_, setRecordedBlob] = useRecoilState(recordedBlobAtom);
  const recorderRef = useRef<MediaSourceRecorder | null>(null);

  const handleToggleRecord = () => {
    setRecording((currentVal) => !currentVal);
  };

  // TODO 이 로직들도 컴포넌트에 있을 필요는 없다.
  const startRecord = () => {
    if (currentStream) {
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
      <RightControls>
        <AudioSourceButton />
        <StyledCurrentTime />
      </RightControls>
    </Self>
  );
};

export default PreviewController;
