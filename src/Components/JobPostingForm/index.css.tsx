import { css } from "@emotion/react";
import { bp } from "../../shared/css";

export default css`
  background-color: #FFF;
  border: 1px solid #D4D2D0;
  border-radius: 8px;

  article {
    padding: 12px 16px;
  }

  .form-header, .form-fields {
    border-bottom: 1px solid #D4D2D0;
  }

  ${bp('large')}{
    article {
      padding: 24px 32px;
    }
  }
`;
