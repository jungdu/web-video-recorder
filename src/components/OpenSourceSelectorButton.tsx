import React from "react";
import styled from "@emotion/styled";
import { currentStreamAtom, recordingAtom } from "recoilStates/recordState";
import { useRecoilState } from "recoil";
import selectSourceSvg from "images/select_source.svg"

interface OpenSourceSelectorButton {
  className ?: string;
}

const SelfOpenSourceSelectorButton = styled.div`
  width: 42px;
  height: 42px;
  background-image: url(${selectSourceSvg});
  background-size: cover;
  cursor: pointer;
  opacity: .4;
  transition: all 160ms;

  &:hover{
    opacity: 1;
  }
`;

const OpenSourceSelectorButton: React.FC<OpenSourceSelectorButton> = ({className}) => {
  const [_, setCurrentStream] = useRecoilState(currentStreamAtom);
  const [recording] = useRecoilState(recordingAtom);
  
  const handleClick = () => {
    if(recording){
      // TODO 녹화 중에는 source를 바꿀 수 있도록 할 예정
      alert('녹화중에는 바꿀 수 없습니다.\n녹화를 정지 후 다시 선택해 주세요.')
    }else{
      setCurrentStream(null);
    }
  }

  return <SelfOpenSourceSelectorButton className={className} onClick={handleClick} />
};

export default OpenSourceSelectorButton;