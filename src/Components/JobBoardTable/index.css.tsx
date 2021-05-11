import { css } from "@emotion/react";

export default css`
  width: 100%;
  overflow-x: auto;

  .table-wrapper {
      width: 100%;
      min-width: 640px;
  }

  .table-header {
    padding: 0 18px;
    margin-bottom: 8px;

    div {
      color: #646464;
      font-weight: 700;
      text-align: center;

      &:first-of-type{
          text-align: left;
      }
    }
  }
  .table-header,
  .table-body div {
    display: grid;
    grid-template-columns: repeat(18, 1fr);
    grid-column-gap: 8px;
    text-align: center;

    &:first-of-type {
        text-align: left;
    }
  }

  .table-row {
    border: 1px solid #D4D2D0;
    background-color: #fff;
    padding: 18px;
    border-radius: 8px;
    margin-bottom: 16px;

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: #2d2d2d;
      font-size: 14px;
      line-height: 21px;

      h2 {
        font-size: 14px;
        line-height: 21px;
      }

      p {
        color: #949494;
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
