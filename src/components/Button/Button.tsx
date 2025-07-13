import React from "react";
import styles from "./Button.module.css";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ children, className, ...rest }) => (
  <button
    className={`${styles.button} ${className ? " " + className : ""}`}
    {...rest}
  >
    {children}
  </button>
);

export default Button;