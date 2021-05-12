/** @jsxImportSource @emotion/react */
import React from "react";
import { JobHeaderBar } from "../../Components/JobHeaderBar";
import { MainAnchor } from "../../Components/MainAnchor";
import { NavigationBar } from "../../Components/NavigationBar";
import { Job, JobBoardTable, JobHeaders } from "../../Components/JobBoardTable";
import styles from "./index.css";
import data from "./initialJobData.json";
import { JobField, JobPostingForm } from "../../Components/JobPostingForm";

export interface JobListingPageProps {}
let jobHeaders = data.headers as JobHeaders[];
let jobFields = data.jobFields as JobField[]; //used for Add/Edit Page

export const JobListingPage: React.FC<JobListingPageProps> = () => {
  const initJobs = data.jobs as Job[];
  const [jobs, setJobs] = React.useState(initJobs);
  const [editing, setEdit] = React.useState(false);
  const [adding, setAdd] = React.useState(false);
  const [jobIdx, setJobIdx] = React.useState(-1);

  const addJob = (job: Job) => {
    setJobs([...jobs, job]);
    setAdd(false);
  };

  const setAddJob = () => {
    setAdd(true);
  };

  const setEditJob = (e: React.MouseEvent<HTMLElement>) => {
    setJobIdx(parseInt(e.currentTarget.id.replace("editJob", "")));
    setEdit(true);
  };

  const editJob = (job: Job) => {
    const newJobs = [...jobs];
    newJobs[jobIdx] = job;
    setJobs([...newJobs]);
    setEdit(false);
  };

  const cancelJobPosting = () => {
    setEdit(false);
    setAdd(false);
  };
  return (
    <>
      <NavigationBar name={"Tony Rucker"} role={"Interviewee"} />

      <main css={styles}>
        <MainAnchor />
        {!editing && !adding && (
          <>
            <JobHeaderBar
              headingText={"Jobs"}
              subheadingText={`${jobs.length | 0} listings`}
              buttonFunction={setAddJob}
              buttonText={"Add Job"}
            />
            <JobBoardTable
              className={"job-table"}
              buttonHandler={setEditJob}
              jobs={jobs}
              jobsHeaders={jobHeaders}
            />
          </>
        )}

        {(editing || adding) && (
          <>
            <JobPostingForm
              cancelPosting={cancelJobPosting}
              job={jobs[jobIdx]}
              addJob={addJob}
              editJob={editJob}
              jobFields={jobFields}
              isAdding={adding}
            />
          </>
        )}
      </main>
    </>
  );
};
