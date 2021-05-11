/** @jsxImportSource @emotion/react */
import React, { MouseEventHandler } from "react";
import { Button } from "../Button";
import { Copy } from "../Copy";
import { Heading } from "../Heading";
import styles from "./index.css";

export interface JobPostingFormProps extends React.HTMLAttributes<HTMLElement> {
  jobFields: JobField[];
  addJob: Function,
  editJob: Function,
  cancelPosting: Function,
  isAdding: boolean,
}

export interface JobField {
  name: string;
  helperText: string;
  placeholderText: string;
}

export const JobPostingForm: React.FC<JobPostingFormProps> = ({
  jobFields,
  addJob,
  editJob,
  cancelPosting,
  isAdding,
  className,
}) => {
  return (
    <>
      <section css={styles} className={className}>
          <article className={"form-header"}>{isAdding.toString()}</article>
          <article className={"form-fields"}>FormFields</article>
          <article className={"form-buttons"}>Buttons</article>
      </section>
    </>
  );
};
