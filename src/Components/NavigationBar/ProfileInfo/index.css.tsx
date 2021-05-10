import { css } from "@emotion/react";
import { bp } from "../../../shared/css";

export default css`
  display: flex;
  margin: 0 24px;
  flex-direction: row;
  justify-content: flex-end;
  position: relative;
  right: 0;
  height: 64px;

  ${bp("large")} {
    max-width: 780px;
    margin: 0 auto;
  }

  img {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto 0;
  }

  .profile-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 8px;
  }

  .profile-name {
    font-size: 16px;
    line-height: 24px;
  }

  .profile-role {
    font-size: 12px;
    line-height: 18px;
  }
`;
