import { css } from "@emotion/react";
import { bp } from "../../shared/css";

export default css`
  margin: 40px 24px;

  ${bp("small")} {
    max-width: 780px;
    margin: 80px auto;
  }

  .job-table {
    margin-top: 27px;
  }
`;
