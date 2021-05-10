
import React from 'react';
import { JobHeaderBar } from '../../Components/JobHeaderBar';
import { MainAnchor } from '../../Components/MainAnchor';
import { NavigationBar } from '../../Components/NavigationBar';

export interface JobListingPageProps {}

const addJob = () => {
    console.log("add new job to page");
}


export const JobListingPage: React.FC<JobListingPageProps> = ({
}) => {
    return (
        <>
           <NavigationBar name={"Tony Rucker"} role={"Interviewee"} />
           <main>
               <MainAnchor />
               {/* this will change once I load up data and get it working */}
               <JobHeaderBar headingText={"Jobs"} subheadingText={`3 listings`} buttonFunction={addJob} buttonText={"Add Job"} />
           </main>
        </>
    );
}