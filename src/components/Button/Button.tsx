import React from "react";
import style from "./Button.module.css";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ children, className, ...rest }) => (
  <button
    className={`${style.button} ${className ? " " + className : ""}`}
    {...rest}
  >
    {children}
  </button>
);

export default Button;