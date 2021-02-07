import React from "react";
import styled from "@emotion/styled";

import {getDisplayMedia, getUserMedia} from "utils/mediaDevices"

import videoCamSvg from "images/videocam.svg"
import personalVideoSvg from "images/personal_video.svg"
import { noop } from "utils";

interface SourceButtonProps {
  className?: string;
  src: string;
  onClick?: (e: React.MouseEvent) => void;
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

export const VideoCamButton:React.FC<Omit<SourceButtonProps, "src"> & {
  onGetStream: (stream: MediaStream) => void,
  onGetStreamError: (error:Error) => void,
}> = ({onGetStream = noop, onGetStreamError, onClick = noop, ...restProps}) => {
  const handleClick = (e: React.MouseEvent) => {
    getUserMedia({video: true, audio: true}).then(stream => {
      onGetStream(stream);
    }).catch(e => {
      onGetStreamError(e)
    })
  }

  return <SourceButton src={videoCamSvg} onClick={handleClick} {...restProps}>
    Camera
  </SourceButton>
}

export const ScreenButton:React.FC<Omit<SourceButtonProps, "src">& {
  onGetStream: (stream: MediaStream) => void,
  onGetStreamError: (error:Error) => void,
}> = ({onGetStream, onGetStreamError, onClick = noop, ...restProps}) => {
  const handleClick = (e: React.MouseEvent) => {
    onClick(e);
    getDisplayMedia({
      video: true,
    }).then(stream => {
      onGetStream(stream)
    }).catch(e => {
      onGetStreamError(e)
    })
  }

  return <SourceButton src={personalVideoSvg} onClick={handleClick} {...restProps}>
    Screen
  </SourceButton>
}

export default SourceButton;