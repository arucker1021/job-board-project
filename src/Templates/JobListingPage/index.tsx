/** @jsxImportSource @emotion/react */
import React, { useEffect } from "react";
import { JobHeaderBar } from "../../Components/JobHeaderBar";
import { MainAnchor } from "../../Components/MainAnchor";
import { NavigationBar } from "../../Components/NavigationBar";
import { Job, JobBoardTable, JobHeaders } from "../../Components/JobBoardTable";
import styles from "./index.css";
import data from "./initialJobData.json";
import { setConstantValue } from "typescript";

export interface JobListingPageProps {}
let jobHeaders = data.headers as JobHeaders[];
let jobFields = data.jobFields; //used for Add/Edit Page

export const JobListingPage: React.FC<JobListingPageProps> = ({}) => {
  const initJobs = data.jobs;
  const [jobs, setJobs] = React.useState(initJobs);

  const addJob = () => {
    setJobs( [...jobs, {
      jobTitle: "spider chief",
      jobLocation: "spider town",
      jobPosted: "previously",
      jobSponsorship: "spiders don't get sponsorship",
      jobStatus: "no spiders",
      editable: false,
    }]);
  };

  const editJob = () => {
    console.log("Edit job on page");
  };
  return (
    <>
      <NavigationBar name={"Tony Rucker"} role={"Interviewee"} />
      <main css={styles}>
        <MainAnchor />
        {/* this will change once I load up data and get it working */}
        <JobHeaderBar
          headingText={"Jobs"}
          subheadingText={`${jobs.length | 0} listings`}
          buttonFunction={addJob}
          buttonText={"Add Job"}
        />
        <JobBoardTable
          className={"job-table"}
          buttonHandler={editJob}
          jobs={jobs}
          jobsHeaders={jobHeaders}
        />
      </main>
    </>
  );
};
