/** @jsxImportSource @emotion/react */
import React from "react";
import styles from "./index.css";

export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  color: "primary" | "secondary";
  disabled?: boolean | false;
  type?: "button" | "submit" | "reset" | undefined;
  formId?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  color,
  disabled,
  formId,
  type,
  id,
}) => {
  return (
    <button
      disabled={disabled}
      id={id}
      type={type}
      css={styles}
      onClick={onClick}
      className={color}
      form={formId}
    >
      {children}
    </button>
  );
};
