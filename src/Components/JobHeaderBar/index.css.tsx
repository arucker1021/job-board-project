import { css } from "@emotion/react";
import { bp, colors, rem } from "../../shared/css";

export default css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  button {
    height: 100%;
  }

  .job-heading {
    display: flex;
    flex-direction: column;

    > h1 {
      font-weight: 700;
      display: flex;
      margin-top: 2px;
    }

    > p {
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: ${colors.darkGray};
      font-weight: 400;
    }
  }

  ${bp("small")} {
    .job-heading {
      display: flex;
      flex-direction: row;

      > h1 {
        font-weight: 700;
        display: flex;
        margin-top: ${rem(2)};
      }

      > p {
        margin-left: ${rem(8)};
      }
    }

    button {
      height: auto;
    }
  }
`;
