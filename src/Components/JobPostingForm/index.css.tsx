import { css } from "@emotion/react";
import { border, borderRadius, bp, colors, rem } from "../../shared/css";

export default css`
  background-color: ${colors.white};
  ${border(`${colors.border}`)};
  ${borderRadius(8)};

  article {
    padding: ${rem(12)} ${rem(16)};
  }

  .form-header,
  .form-fields {
    ${border(`${colors.border}`)};
  }

  ${bp("large")} {
    article {
      padding: ${rem(24)} ${rem(32)};
    }
  }
`;
