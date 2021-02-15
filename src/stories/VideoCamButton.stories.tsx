import React from 'react';
import { VideoCamButton } from 'components/SourceSelectorButton';

import styled from '@emotion/styled';

const Container = styled.div`
  background: black;
  width: 500px;
  height: 500px;
`;

export default {
  component: VideoCamButton,
  title: 'components/VideoCamButton',
};

export const DefaultVideoCamButton = () => {
  return (
    <Container>
      <VideoCamButton
        onGetStream={(stream) => {
          console.log(stream);
        }}
        onGetStreamError={(error) => {
          console.log(error);
        }}
      ></VideoCamButton>
    </Container>
  );
};
