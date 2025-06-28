import React from "react";
import styles from "./Link.module.css";

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: React.ReactNode;
};

const Link: React.FC<LinkProps> = ({ href, children, className, ...rest }) => (
  <a
    href={href}
    className={`${styles.link} ${className ? " " + className : ""}`}
    {...rest}
  >
    {children}
  </a>
);

export default Link;