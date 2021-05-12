import { css } from "@emotion/react";
import {
  border,
  borderRadius,
  bp,
  colors,
  rem,
  transition,
} from "../../shared/css";

export default css`
  font-size: ${rem(16)};
  line-height: ${rem(18)};
  padding: ${rem(13)} ${rem(16)};
  ${borderRadius(8)};
  font-weight: 700;
  border: none;
  ${transition("all")};

  ${bp("medium")} {
  }

  &:hover {
    cursor: pointer;
  }

  &.primary {
    background-color: ${colors.blue};
    color: ${colors.white};
    ${border(`${colors.blue}`)};
  }

  &.primary:hover {
    background-color: ${colors.white};
    color: ${colors.blue};
    ${border(`${colors.border}`)};
  }

  &.secondary {
    background-color: ${colors.white};
    color: ${colors.blue};
    ${border(`${colors.border}`)};
  }

  &.secondary:hover {
    background-color: ${colors.blue};
    color: ${colors.white};
    ${border(`${colors.blue}`)};
  }
`;
