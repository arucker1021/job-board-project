/** @jsxImportSource @emotion/react */
import React from 'react';
import styles from './index.css'

export interface CopyProps extends React.HTMLAttributes<HTMLElement> {
}

export const Copy: React.FC<CopyProps> = ({
    children,
    className,
}) => {
    return (
        <>
           <p css={styles} className={className}>
                {children} 
           </p>
        </>
    );
}