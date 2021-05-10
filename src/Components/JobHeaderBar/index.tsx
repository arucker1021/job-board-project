/** @jsxImportSource @emotion/react */
import React, { MouseEventHandler } from "react";
import { Button } from "../Button";
import { Copy } from "../Copy";
import { Heading } from "../Heading";
import styles from "./index.css";

export interface JobHeaderBarProps extends React.HTMLAttributes<HTMLElement> {
  headingText: string;
  subheadingText: string;
  buttonFunction: MouseEventHandler<HTMLButtonElement>;
  buttonText: string;
}

export const JobHeaderBar: React.FC<JobHeaderBarProps> = ({
  headingText,
  subheadingText,
  buttonFunction,
  buttonText,
  className,
}) => {
  return (
    <>
      <section css={styles} className={className}>
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
