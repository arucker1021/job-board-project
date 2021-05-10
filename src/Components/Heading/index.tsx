/** @jsxImportSource @emotion/react */
import React from 'react';
import styles from './index.css'

export interface HeadingProps extends React.HTMLAttributes<HTMLElement> {
    level: 1 | 2 | 3 | 4 | 5 | 6; //note styles only exist for header levels 1 and 2 but went ahead and handled all cases
}

export const Heading: React.FC<HeadingProps> = ({
    children,
    className,
    level,
}) => {

    switch(level) { 
        case 1: { 
            return (
                <>
                   <h1 css={styles} className={className}>
                        {children} 
                   </h1>
                </>
            );
        } 
        case 2: { 
            return (
                <>
                   <h2 css={styles} className={className}>
                        {children} 
                   </h2>
                </>
            );
         } 
         case 3: { 
            return (
                <>
                   <h3 css={styles} className={className}>
                        {children} 
                   </h3>
                </>
            );
         } 
         case 4: { 
            return (
                <>
                   <h4 css={styles} className={className}>
                        {children} 
                   </h4>
                </>
            );
         } 
         case 5: { 
            return (
                <>
                   <h5 css={styles} className={className}>
                        {children} 
                   </h5>
                </>
            );
         } 
         case 6: { 
            return (
                <>
                   <h6 css={styles} className={className}>
                        {children} 
                   </h6>
                </>
            );
         } 
     } 
    
    
}