import { css } from "@emotion/react";
import { bp, rem } from "../../shared/css";

export default css`
  margin: ${rem(40)} ${rem(24)};
  
  ${bp("small")} {
    max-width: ${rem(780)};
    margin: ${rem(80)} auto;
    padding: 0 ${rem(24)};
  }

  .job-table {
    margin-top: ${rem(27)};
  }
`;
