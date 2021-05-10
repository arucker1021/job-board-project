import { css } from "@emotion/react";

export default css`
  margin: 0;
  padding: 0;

  /* Only having header styles for h1 and h2 tags is on purpose since they weren't defined in figma design and to keep code as small as possible I didn't include them */

  h1 {
    font-size: 28px;
    line-height: 35px;
  }

  h2 {
    font-size: 14px;
    line-height: 21px;
  }
`;
