/** @jsxImportSource @emotion/react */
import React from "react";
import { Copy } from "../../Copy";
import { RoundedProfileIcon } from "../RoundedProfileIcon";
import styles from "./index.css";

export interface ProfileInfoProps {
  name: string;
  role: string;
}

export const ProfileInfo: React.FC<ProfileInfoProps> = ({ name, role }) => {
  return (
    <>
      <section css={styles}>
        <RoundedProfileIcon
          image={{
            source: `/images/empty-profile.png`,
            alt: `Profile picture for ${name}`,
            height: 36,
            width: 36,
          }}
        />
        <div className={"profile-info"}>
          <Copy className={"profile-name"}>{name}</Copy>
          <Copy className={"profile-role"}>{role}</Copy>
        </div>
      </section>
    </>
  );
};
