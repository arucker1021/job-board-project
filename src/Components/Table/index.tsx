/** @jsxImportSource @emotion/react */
import React, { MouseEventHandler } from "react";
import { Button } from "../Button";
import { Copy } from "../Copy";
import { Heading } from "../Heading";
import styles from "./index.css";

export interface TableProps extends React<HTMLElement> {}

export const Table: React.FC<TableProps> = ({}) => {
  return (
    <>
      <section css={styles}>
        <div className={"job-heading"}>
          <Heading level={1}>{headingText}</Heading>
          <Copy>{subheadingText}</Copy>
        </div>
        <div className={"job-heading-button"}>
          <Button color={"primary"} onClick={buttonFunction}>
            {buttonText}
          </Button>
        </div>
      </section>
    </>
  );
};
