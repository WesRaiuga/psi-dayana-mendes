import React from "react";
import style from "./WhatsappButton.module.css";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

const url = "https://wa.me/5511960765640?text=Oi%20Day,%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20sessão";

const gtag_report_conversion = (url: string) => {
  const callback = () => {
    if (typeof url != "undefined") {
      window.location.href = url;
    }
  };
  window.gtag("event", "conversion", {
    send_to: "AW-17381606924/d6syCNTZp_4aEIyMmeBA",
    event_callback: callback,
  });
  return false;
};

const WhatsappButton: React.FC = () => (
  <a
    href={url}
    className={style.wppLink}
    target="_blank"
    rel="noopener noreferrer"
    onClick={(e) => {
      e.preventDefault();
      gtag_report_conversion(url);
    }}
  >
    Agende sua sessão
  </a>
);

export default WhatsappButton;
