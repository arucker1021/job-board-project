/** @jsxImportSource @emotion/react */
import React, { MouseEventHandler } from 'react';
import styles from './index.css'

export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
    onClick: MouseEventHandler<HTMLButtonElement>,
    color: 'primary' | 'secondary'
}

export const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    color
}) => {

   return (
        <button css={styles} onClick={onClick} className={color}>{children}</button>
   )
}