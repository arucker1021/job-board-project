import { css } from "@emotion/react";

export default css`
  margin: 0;
  padding: 0;
  position: absolute;
  top: -100000px;
  padding: 16px;
  white-space: nowrap;
  color: white;
  text-decoration: none;

  &:hover,
  &:focus,
  &:active {
    top: 0;
  }
`;
