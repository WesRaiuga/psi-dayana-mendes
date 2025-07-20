import styles from "./Card.module.css";

type CardProps = {
  title: string;
  description: string;
  icon?: string;
};

const Card: React.FC<CardProps> = ({ title, description, icon }: CardProps) => {
  return (
    <div className={styles.card}>
      {icon && <img src={icon} alt="Ícone" className={styles.icon} />}
      <div className={styles.textContent}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default Card;
