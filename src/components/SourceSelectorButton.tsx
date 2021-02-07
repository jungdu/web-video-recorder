import React from "react";
import styled from "@emotion/styled";

import {getDisplayMedia, getUserMedia} from "utils/mediaDevices"

import videoCamSvg from "images/videocam.svg"
import personalVideoSvg from "images/personal_video.svg"

interface SourceButtonProps {
  className?: string;
  src: string;
  onClick: (e: React.MouseEvent) => void;
}

const StyledSourceButton = styled.div`
  width: 85px;
  height: auto;
  color: rgba(255,255,255, 0.9);
  font-size: 25px;
  text-align: center;
  cursor: pointer;
`

const StyledSourceButtonIcon = styled.div<{src: string}>`
  width: 85px;
  height: 85px;
  background-image: url(${({src}) => src});
  background-size: cover;
`

const SourceButton: React.FC<SourceButtonProps> = ({className, children, src, onClick}) => {
  return <StyledSourceButton className={className} onClick={onClick}>
    <StyledSourceButtonIcon src={src}></StyledSourceButtonIcon>
    {children}
  </StyledSourceButton>
};

export const VideoCamButton:React.FC<{
  className?: string,
  onGetStream: (stream: MediaStream) => void,
  onGetStreamError: (error:Error) => void,
}> = ({onGetStream, onGetStreamError, className}) => {
  const handleClick = (e: React.MouseEvent) => {
    getUserMedia({video: true, audio: false}).then(stream => {
      onGetStream(stream);
    }).catch(e => {
      onGetStreamError(e)
    })
  }

  return <SourceButton className={className} src={videoCamSvg} onClick={handleClick}>
    Camera
  </SourceButton>
}

export const ScreenButton:React.FC<{
  className?: string,
  onGetStream: (stream: MediaStream) => void,
  onGetStreamError: (error:Error) => void,
}> = ({className, onGetStream, onGetStreamError}) => {
  const handleClick = (e: React.MouseEvent) => {
    getDisplayMedia({
      video: true,
    }).then(stream => {
      onGetStream(stream)
    }).catch(e => {
      onGetStreamError(e)
    })
  }

  return <SourceButton className={className} src={personalVideoSvg} onClick={handleClick}>
    Screen
  </SourceButton>
}

export default SourceButton;