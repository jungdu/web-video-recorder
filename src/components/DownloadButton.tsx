import React from "react";
import styled from "@emotion/styled";

import CloudDownloadSvg from "images/cloud_download.svg"
import { css } from "@emotion/react";
import { useRecoilState } from "recoil";
import {recordedBlobAtom} from "recoilStates/recordState"
import { downloadBlob } from "utils";

const Self = styled.span<{disabled: boolean}>`
  display: flex;
  height: 42px;
  width: 145px;
  justify-content: center;
  align-items: center;
  ${({disabled}) => disabled? css`
    background: #ccc;
  `: css`
    background: #2EA7FF;
    cursor: pointer;
  `}
`;

const Text = styled.span`
  font-size: 20px;
  color: #fff;
  margin-right: 5px;
`

const DownloadIcon = styled.span`
  width: 36px;
  height: 32px;
  background-image: url(${CloudDownloadSvg});
  background-size: cover;
`

const DownloadButton: React.FC<{className?: string}> = ({className}) => {
  const [recordedBlob] = useRecoilState(recordedBlobAtom);

  const handleClick = () => {
    if(recordedBlob){
      downloadBlob(recordedBlob);
    }
  }

  return <Self className={className} disabled={!recordedBlob} onClick={handleClick}>
    <Text>다운로드</Text><DownloadIcon/>
  </Self>;
};

export default DownloadButton;