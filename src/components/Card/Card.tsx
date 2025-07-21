import style from "./Card.module.css";

type CardProps = {
  title: string;
  description: string;
  icon?: string;
  hover?: boolean,
  children?: React.ReactNode,
  className?: string
};

const Card: React.FC<CardProps> = ({ title, description, icon, hover, children, className }: CardProps) => {
  return (
    <div className={`${style.card} ${hover ? style.hover : ""} ${className ? " " + className : ""}`}>
      {icon && <img src={icon} alt="Ícone" className={style.icon} />}
      <div className={style.textContent}>
        <h3 className={style.title}>{title}</h3>
        <p className={style.description}>{description}</p>
        {children}
      </div>
    </div>
  );
};

export default Card;
