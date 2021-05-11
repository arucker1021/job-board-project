import { css } from "@emotion/react";
import { border, borderRadius, colors, rem } from "../../shared/css";

export default css`
  width: 100%;
  overflow-x: auto;

  .table-wrapper {
    width: 100%;
    min-width: ${rem(640)};
  }

  .table-header {
    padding: 0 ${rem(18)};
    margin-bottom: ${rem(8)};

    div {
      color: ${colors.darkGray};
      font-weight: 700;
      text-align: center;

      &:first-of-type {
        text-align: left;
      }
    }
  }
  .table-header,
  .table-body div {
    display: grid;
    grid-template-columns: repeat(18, 1fr);
    grid-column-gap: ${rem(8)};
    text-align: center;

    &:first-of-type {
      text-align: left;
    }
  }

  .table-row {
    ${border(`${colors.border}`)};
    background-color: ${colors.white};
    padding: ${rem(18)};
    ${borderRadius(8)};
    margin-bottom: ${rem(16)};

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: ${colors.black};
      font-size: ${rem(14)};
      line-height: ${rem(21)};

      h2 {
        font-size: ${rem(14)};
        line-height: ${rem(21)};
      }

      p {
        color: ${colors.darkGray};
      }
    }
  }
  /* Span columns, this is passed in with table-data */
  .span-1 {
    grid-column: span 1;
  }
  .span-2 {
    grid-column: span 2;
  }
  .span-3 {
    grid-column: span 3;
  }
  .span-4 {
    grid-column: span 4;
  }
  .span-5 {
    grid-column: span 5;
  }
  .span-6 {
    grid-column: span 6;
  }
  .span-7 {
    grid-column: span 7;
  }
  .span-8 {
    grid-column: span 8;
  }
  .span-9 {
    grid-column: span 9;
  }
  .span-10 {
    grid-column: span 10;
  }
  .span-11 {
    grid-column: span 11;
  }
  .span-12 {
    grid-column: span 12;
  }
  .span-13 {
    grid-column: span 13;
  }
  .span-14 {
    grid-column: span 14;
  }
  .span-15 {
    grid-column: span 15;
  }
  .span-16 {
    grid-column: span 16;
  }
  .span-17 {
    grid-column: span 17;
  }
  .span-18 {
    grid-column: span 18;
  }
`;
