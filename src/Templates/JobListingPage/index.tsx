
import React from 'react';
import { MainAnchor } from '../../Components/MainAnchor';
import { NavigationBar } from '../../Components/NavigationBar';

export interface JobListingPageProps {}

export const JobListingPage: React.FC<JobListingPageProps> = ({
}) => {
    return (
        <>
           <NavigationBar />
           <main>
               <MainAnchor />
           </main>
        </>
    );
}