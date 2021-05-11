/** @jsxImportSource @emotion/react */
import React from "react";
import styles from "./index.css";

export interface ScreenReaderTextProps extends React.HTMLAttributes<HTMLElement> {}

export const ScreenReaderText: React.FC<ScreenReaderTextProps> = ({ children, className }) => {
  return (
    <>
      <span css={styles}>
        {children}
      </span>
    </>
  );
};
