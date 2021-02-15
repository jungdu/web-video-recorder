import { css } from '@emotion/react';

export const centerXCss = css`
  position: absolute;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
`;

export const centerYCss = css`
  position: absolute;
  top: 50%;
  transform: translate3d(0, -50%, 0);
`;

export const centerCss = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
`;
