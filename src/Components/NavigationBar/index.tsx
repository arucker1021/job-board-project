/** @jsxImportSource @emotion/react */
import styles from './index.css'
import React from 'react';
import { ProfileInfo } from './ProfileInfo';
import { SkipToMainLink } from '../SkipToMainLink';

export interface NavigationBarProps {
}

export const NavigationBar: React.FC<NavigationBarProps> = ({
    
}) => {

    return (
        <>
            <nav css={styles}>
                <SkipToMainLink />
                <ProfileInfo name="Tony Rucker" role="Interviewee"/>
            </nav>
        </>
    );
}