/** @jsxImportSource @emotion/react */
import React from 'react';
import styles from './index.css'

export interface JobHeaderBarProps extends React.HTMLAttributes<HTMLElement> {
    headingText: string,
    subheadingText: string,
    buttonFunction: Function,
    buttonText: string,
}

// this should be included in every template where a skip to main link is included.
// Put at top of main content after navigation
export const JobHeaderBar: React.FC<JobHeaderBarProps> = (
    headingText,
    subheadingText,
    buttonFunction,
    buttonText,
) => {
    return (
        <>
           <section css={styles}>
               <div className={"job-heading"}>
                   <Heading level={1}>{headingText}</Heading>
                   <Copy>{subheadingText}</Copy>
               </div>
               <div className={"job-heading-button"}>
                   <Button color={'blue'} onClick={buttonFunction}>{buttonText}</Button>
               </div>
           </section>
        </>
    );
}