/** @jsxImportSource @emotion/react */
import React from "react";
import styles from "./index.css";

export interface SkipToMainLinkProps
  extends React.HTMLAttributes<HTMLElement> {}

export const SkipToMainLink: React.FC<SkipToMainLinkProps> = ({}) => {
  return (
    <>
      <a href={"#main"} css={styles}>
        Skip to Main Content
      </a>
    </>
  );
};
