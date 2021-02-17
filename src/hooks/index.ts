import { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { currentStreamAtom } from 'recoilStates/recordState';

export const useDuration = (counting: boolean) => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [duration, setDuration] = useState<number>(0);

  useEffect(() => {
    if (counting) {
      if (!intervalRef.current) {
        intervalRef.current = setInterval(() => {
          setDuration((curVal) => curVal + 1);
        }, 1000);
      } else {
        throw new Error('Interval is already exist');
      }
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setDuration(0);
    }
  }, [counting]);

  return duration;
};

export const useAudioStream = () => {
  const [currentStream] = useRecoilState(currentStreamAtom);
  const [audioTrack, setAudioTrack] = useState<MediaStreamTrack | null>(null);
  const [enabled, setEnabled] = useState<boolean>(false);

  useEffect(() => {
    if (audioTrack) {
      audioTrack.enabled = enabled;
    }
  }, [enabled]);

  useEffect(() => {
    if (currentStream) {
      const [newAudioTrack] = currentStream.getAudioTracks();
      if (newAudioTrack) {
        setAudioTrack(newAudioTrack);
        setEnabled(newAudioTrack.enabled);
      } else {
        setAudioTrack(null);
        setEnabled(false);
      }
    } else {
      setAudioTrack(null);
      setEnabled(false);
    }
  }, [currentStream]);

  return {
    audioTrack,
    enabled,
    setEnabled,
  };
};
