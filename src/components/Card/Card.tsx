import React, { useState } from "react";
import styles from "./Card.module.css";

type CardProps = {
  title: string;
  description: string;
  icon?: string;
};

const Card: React.FC<CardProps> = ({ title, description, icon }: CardProps) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div className={styles.card} onClick={toggleExpanded}>
      {icon && <img src={icon} alt="Ícone" className={styles.icon} />}
      <div className={styles.textContent}>
        <h3 className={styles.title}>{title}</h3>
        <p className={`${styles.description} ${expanded ? styles.expanded : ''}`}>{description}</p>
      </div>
    </div>
  );
};

export default Card;
