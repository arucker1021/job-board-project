/** @jsxImportSource @emotion/react */
import React from "react";
import styles from "./index.css";

export interface MainAnchorProps {}

// this should be included in every template where a skip to main link is included.
// Put at top of main content after navigation
export const MainAnchor: React.FC<MainAnchorProps> = () => {
  return (
    <>
      <div css={styles} tabIndex={-1} id="main">
        main content
      </div>
    </>
  );
};
