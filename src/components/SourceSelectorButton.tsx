import React from "react";
import styled from "@emotion/styled";

import {centerYCss} from "utils/style"
import videoCamSvg from "images/videocam.svg"
import personalVideoSvg from "images/personal_video.svg"


const StyledSourceButton = styled.div`
  color: rgba(255,255,255, 0.9);
  font-size: 25px;
  text-align: center;
  cursor: pointer;
  ${centerYCss};
  transition: transform 180ms;

  &:hover{
    transform: translate3d(0, -50%, 0) scale(1.2);
  }
`

const StyledSourceButtonIcon = styled.div<{src: string}>`
  width: 85px;
  height: 85px;
  background-image: url(${({src}) => src});
  background-size: cover;
`

interface SourceButtonProps {
  className?: string;
  src: string;
  onClick: (e: React.MouseEvent) => void;
}

const SourceButton: React.FC<SourceButtonProps> = ({className, children, src, onClick}) => {
  return <StyledSourceButton className={className} onClick={onClick}>
    <StyledSourceButtonIcon src={src}></StyledSourceButtonIcon>
    {children}
  </StyledSourceButton>
};

export const VideoCamButton:React.FC<Omit<SourceButtonProps, "src">> = (props) => {
  return <SourceButton src={videoCamSvg} {...props}>
    Camera
  </SourceButton>
}

export const ScreenButton:React.FC<Omit<SourceButtonProps, "src">> = (props) => {
  return <SourceButton src={personalVideoSvg} {...props}>
    Screen
  </SourceButton>
}

export default SourceButton;

