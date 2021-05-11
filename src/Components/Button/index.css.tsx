import { css } from "@emotion/react";
import { border, borderRadius, bp, rem, transition } from "../../shared/css";

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
    background-color: #085ff7;
    color: #fff;
    ${border("#085ff7")};
  }

  &.primary:hover {
    background-color: #fff;
    color: #085ff7;
    ${border("#D4D2D0")};
  }

  &.secondary {
    background-color: #fff;
    color: #085ff7;
    ${border("#D4D2D0")};
  }

  &.secondary:hover {
    background-color: #085ff7;
    color: #fff;
    ${border("#085ff7")};
  }
`;
