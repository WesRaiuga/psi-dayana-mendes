import React from 'react';
import styles from './FloatingButtonArea.module.css';
import FloatingButton from '@/components/FloatingButton/FloatingButton';

const FloatingButtonArea: React.FC = () => {
  return (
    <div className={styles.floatArea}>
        <FloatingButton 
            link={{ href: "https://wa.me/5511960765640?text=Oi%20Day,%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20sessão", ariaLabel: "Abrir conversa no WhatsApp" }}
            bgColor="#128C7E"
        >
            <i className="fa-brands fa-whatsapp"></i>
        </FloatingButton>
        {/* <FloatingButton onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} >
            <i className="fa-solid fa-chevron-up" style={{fontSize: '25px'}}></i>
        </FloatingButton> */}
    </div>
  )
};

export default FloatingButtonArea;