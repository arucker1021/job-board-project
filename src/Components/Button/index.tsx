/** @jsxImportSource @emotion/react */
import React, { MouseEventHandler } from "react";
import styles from "./index.css";

export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  color: "primary" | "secondary";
  disabled?: boolean | false;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, color, disabled }) => {
  return (
    <button disabled={disabled} css={styles} onClick={onClick} className={color}>
      {children}
    </button>
  );
};
