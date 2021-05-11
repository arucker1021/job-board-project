import { css } from "@emotion/react";
import { rem } from "../../shared/css";

export default css`
  margin: 0;
  padding: 0;

  /* Only having header styles for h1 and h2 tags is on purpose since they weren't defined in figma design and to keep code as small as possible I didn't include them */

  h1 {
    font-size: ${rem(28)};
    line-height: ${rem(35)};
  }

  h2 {
    font-size: ${rem(14)};
    line-height: ${rem(21)};
  }
`;
