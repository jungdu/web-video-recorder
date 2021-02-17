import React from 'react';
import { ScreenButton } from 'components/SourceSelectorButton';

import styled from '@emotion/styled';

const Container = styled.div`
  background: black;
  width: 500px;
  height: 500px;
`;

export default {
  component: ScreenButton,
  title: 'components/ScreenButton',
};

export const DefaultScreenButton = () => {
  return (
    <Container>
      <ScreenButton
        onSetStream={(stream) => {
          console.log(stream);
        }}
        onSetStreamError={(error) => {
          console.log(error);
        }}
      ></ScreenButton>
    </Container>
  );
};
