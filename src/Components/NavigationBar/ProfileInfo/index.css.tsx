import { css } from "@emotion/react";
import { bp, colors, rem } from "../../../shared/css";

export default css`
  display: flex;
  margin: 0 ${rem(24)};
  flex-direction: row;
  justify-content: flex-end;
  position: relative;
  right: 0;
  height: ${rem(64)};

  ${bp("small")} {
    max-width: ${rem(780)};
    margin: 0 auto;
    padding: 0 ${rem(24)};
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
    margin-left: ${rem(8)};
    color: ${colors.lightGray};
  }

  .profile-name {
    font-size: ${rem(16)};
    line-height: ${rem(24)};
  }

  .profile-role {
    font-size: ${rem(12)};
    line-height: ${rem(18)};
  }
`;
