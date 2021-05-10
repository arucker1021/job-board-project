/** @jsxImportSource @emotion/react */
import styles from "./index.css";
import React from "react";
import { ProfileInfo } from "./ProfileInfo";
import { SkipToMainLink } from "./SkipToMainLink";

export interface NavigationBarProps extends React.HTMLAttributes<HTMLElement> {
  name: string;
  role: string;
}

export const NavigationBar: React.FC<NavigationBarProps> = ({ name, role, className }) => {
  return (
    <>
      <nav css={styles} className={className}>
        <SkipToMainLink />
        <ProfileInfo name={name} role={role} />
      </nav>
    </>
  );
};
