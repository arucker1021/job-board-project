import { css } from "@emotion/react";
import { bp, transition } from "../../shared/css";

export default css`
  font-size: 16px;
  line-height: 18px;
  padding: 13px 16px;
  border-radius: 8px;
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
    border: 1px solid #085ff7;
  }

  &.primary:hover {
    background-color: #fff;
    color: #085ff7;
    border: 1px solid #d4d2d0;
  }

  &.secondary {
    background-color: #fff;
    color: #085ff7;
    border: 1px solid #d4d2d0;
  }

  &.secondary:hover {
    background-color: #085ff7;
    color: #fff;
    border: 1px solid #085ff7;;
  }
`;
