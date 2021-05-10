/** @jsxImportSource @emotion/react */
import React from 'react';
import styles from './index.css'
import { Image } from '../../../shared/image'

export interface RoundedProfileIconProps extends React.HTMLAttributes<HTMLElement> {
    image: Image
}

export const RoundedProfileIcon: React.FC<RoundedProfileIconProps> = ({
    image
}) => {
    return (
        <>
           <img css={styles} src={image.source} alt={image.alt} height={image.height} width={image.width} />
        </>
    );
}