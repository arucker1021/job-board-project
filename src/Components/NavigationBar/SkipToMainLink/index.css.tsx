import { css } from "@emotion/react";
import { rem } from "../../../shared/css";

export default css`
  margin: 0;
  padding: 0;
  position: absolute;
  top: -100000px;
  padding: ${rem(16)};
  white-space: nowrap;
  color: white;
  text-decoration: none;

  &:hover,
  &:focus,
  &:active {
    top: 0;
  }
`;
