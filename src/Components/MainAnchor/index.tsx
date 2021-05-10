/** @jsxImportSource @emotion/react */
import React from 'react';
import styles from './index.css'

export interface MainAnchorProps extends React.HTMLAttributes<HTMLElement> {
}

export const MainAnchor: React.FC<MainAnchorProps> = ({
}) => {
    return (
        <>
           <div tabIndex={-1} id="main">main content</div>
        </>
    );
}