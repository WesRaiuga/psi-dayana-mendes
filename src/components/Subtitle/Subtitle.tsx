import React from "react";
import style from "./Subtitle.module.css";

type SubtitleProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

const Subtitle: React.FC<SubtitleProps> = ({children}) => {
  return (
    <div className={style.subtitle}>
      <h1>
        <span>{children}</span>
      </h1>
    </div>
  );
};

export default Subtitle;
