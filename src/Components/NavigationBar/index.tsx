/** @jsxImportSource @emotion/react */
import styles from './index.css'
import React from 'react';
import { ProfileInfo } from './ProfileInfo';
import { SkipToMainLink } from './SkipToMainLink';

export interface NavigationBarProps {
    name: string,
    role: string,
}

export const NavigationBar: React.FC<NavigationBarProps> = ({
    name, 
    role,
}) => {

    return (
        <>
            <nav css={styles}>
                <SkipToMainLink />
                <ProfileInfo name={name} role={role}/>
            </nav>
        </>
    );
}