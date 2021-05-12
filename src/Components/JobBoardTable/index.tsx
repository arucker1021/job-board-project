/** @jsxImportSource @emotion/react */
import React from "react";
import { Button } from "../Button";
import { Copy } from "../Copy";
import { Heading } from "../Heading";
import { ScreenReaderText } from "../ScreenReaderText";
import styles from "./index.css";

export interface JobBoardTableProps extends React.HTMLAttributes<HTMLElement> {
  buttonHandler: React.MouseEventHandler<HTMLButtonElement>;
  jobs: Job[];
  jobsHeaders: JobHeaders[];
}

export interface JobHeaders {
  columns: number;
  title: string;
  screenReader?: boolean;
}

export interface Job {
  jobTitle: string;
  jobLocation: string;
  jobPosted: string;
  jobSponsorship: string;
  jobStatus: string;
  editable?: boolean;
}

export const JobBoardTable: React.FC<JobBoardTableProps> = ({
  className,
  buttonHandler,
  jobs,
  jobsHeaders,
}) => {
  return (
    <>
      <section css={styles} className={className}>
        {!!jobs.length && (
          <div className={"table-wrapper"}>
            <article key={"tableHeader"} className={"table-header"}>
              {jobsHeaders.map((jobHeader, idx) => {
                return (
                  <div
                    key={`header${idx}`}
                    id={`header${idx}`}
                    className={`span-${jobHeader.columns}`}
                  >
                    {jobHeader.screenReader ? (
                      <ScreenReaderText>{jobHeader.title}</ScreenReaderText>
                    ) : (
                      jobHeader.title
                    )}
                  </div>
                );
              })}
            </article>
            <article key={"tableBody"} className={"table-body"}>
              {jobs.map((job, idx) => {
                return (
                  <div key={`jobPosting${idx}`} className={"table-row"}>
                    <div className={"span-5"} aria-labelledby={"header0"}>
                      <Heading level={2}>{job.jobTitle}</Heading>
                      <Copy>{job.jobLocation}</Copy>
                    </div>
                    <div className={"span-4"} aria-labelledby={"header1"}>
                      {job.jobPosted}
                    </div>
                    <div className={"span-4"} aria-labelledby={"header2"}>
                      {job.jobSponsorship}
                    </div>
                    <div className={"span-3"} aria-labelledby={"header3"}>
                      {job.jobStatus}
                    </div>
                    <div className={"span-2"} aria-labelledby={"header4"}>
                      <Button
                        id={`editJob${idx}`}
                        disabled={!job.editable ?? false}
                        color={"secondary"}
                        onClick={buttonHandler}
                        ariaLabel={`Edit ${job.jobTitle} role, ${job.jobLocation}`}
                      >
                        Edit
                      </Button>
                    </div>
                  </div>
                );
              })}
            </article>
          </div>
        )}
        {!jobs.length && (
          <Heading level={2}>No jobs found, please add one</Heading>
        )}
      </section>
    </>
  );
};
