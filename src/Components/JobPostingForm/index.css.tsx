import { css } from "@emotion/react";
import { border, borderRadius, bp, colors, rem } from "../../shared/css";

export default css`
  background-color: ${colors.white};
  ${border(`${colors.border}`)};
  ${borderRadius(8)};

  article {
    padding: ${rem(12)} ${rem(16)};
  }

  .form-header {
    h1 {
      font-size: ${rem(20)};
      line-height: ${rem(30)};
      font-weight: 700;
    }
    p {
      font-size: ${rem(16)};
      line-height: ${rem(24)};
      font-weight: 400;
    }
  }

  .form-fields {
    h2 {
      font-size: ${rem(16)};
      font-weight: 700;
      line-height: ${rem(24)};
    }
    p {
      font-size: ${rem(14)};
      font-weight: 400;
      line-height: ${rem(21)};
      color: ${colors.darkGray};
    }

    input,
    select {
      padding: ${rem(10)} ${rem(12)};
      width: 100%;
      box-sizing: border-box;
      max-width: ${rem(288)};
      ${borderRadius(8)};
      ${border(colors.darkGray)};
      margin-top: ${rem(4)};
      color: ${colors.black};
    }

    select {
      &::-ms-expand {
        display: none;
      }
      appearance: none;
      background-image: url(/images/ChevronDown-24.png);
      background-repeat: no-repeat;
      background-position-y: center;
      background-position-x: calc(100% - 18px);
    }

    .job-field {
      margin-bottom: ${rem(25)};

      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }

  .form-buttons {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    button {
      margin-left: ${rem(16)};
    }
  }

  .form-header,
  .form-fields {
    border-bottom: ${rem(1)} solid ${colors.border};
  }

  ${bp("large")} {
    article {
      padding: ${rem(24)} ${rem(32)};
    }
  }
`;
