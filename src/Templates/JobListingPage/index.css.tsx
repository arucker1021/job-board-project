import { css } from "@emotion/react";
import { bp } from "../../shared/css";

export default css`
  margin: 40px 24px 0;

  ${bp("large")} {
    max-width: 780px;
    margin: 0 auto;
  }

  .job-table {
    margin-top: 27px;
  }
`;
