import { css } from "@emotion/react";
import { border, borderRadius, bp, rem } from "../../shared/css";

export default css`
  background-color: #fff;
  ${border("#D4D2D0")};
  ${borderRadius(8)};

  article {
    padding: ${rem(12)} ${rem(16)};
  }

  .form-header,
  .form-fields {
    ${border("#D4D2D0")};
  }

  ${bp("large")} {
    article {
      padding: ${rem(24)} ${rem(32)};
    }
  }
`;
