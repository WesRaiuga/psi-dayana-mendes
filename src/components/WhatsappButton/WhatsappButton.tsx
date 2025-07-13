import React from "react";
import style from "./WhatsappButton.module.css";
import { Link } from "react-router-dom";

const WhatsappButton: React.FC = () => (
  <Link to="https://wa.me/5511960765640?text=Oi%20Day,%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20sessão" className={style.wppLink} target="_blank" rel="noopener noreferrer">
    Agende sua sessão
  </Link>
);

export default WhatsappButton;
