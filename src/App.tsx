import React, { useEffect, useState } from 'react';
import style from './App.module.css';
import Menu from './components/Menu/Menu';
import Loader from './components/Loader/Loader';
import Footer from './components/Footer/Footer';
import PageContent from './components/PageContent/PageContent';
import AboutMeSection from './components/AboutMeSection/AboutMeSection';
import ContactSection from './components/ContactSection/ContactSection';

const useEffectLoader = (setShowLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
  useEffect(() => {
    const show = setTimeout(() => setShowLoading(false), 200);
    return () => clearTimeout(show);
  }, [setShowLoading]);
}

const useEffectShowContent = (loading: boolean, setShowContent: React.Dispatch<React.SetStateAction<boolean>>) => {
  useEffect(() => {
    if (!loading) {
      const show = setTimeout(() => setShowContent(true), 200);
      return () => clearTimeout(show);
    } else {
      setShowContent(false);
    }
  }, [loading, setShowContent]);
}

function App() {
  const [showLoading, setShowLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffectLoader(setShowLoading);
  useEffectShowContent(showLoading, setShowContent);

  return (
    <>
      <Loader loading={showLoading} />

      <div
      className={style.content}
      style={{
          opacity: showContent ? 1 : 0,
          transition: 'opacity 1.5s ease'
        }}
      >
        <Menu />

        <PageContent>
          <h1>Bem-vinda</h1>

          <AboutMeSection />
          
          <ContactSection />

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate atque, iusto id voluptatem ipsam error maiores architecto expedita incidunt voluptatibus explicabo nam? Rem dolor inventore porro exercitationem nam quia dolorum?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate atque, iusto id voluptatem ipsam error maiores architecto expedita incidunt voluptatibus explicabo nam? Rem dolor inventore porro exercitationem nam quia dolorum?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate atque, iusto id voluptatem ipsam error maiores architecto expedita incidunt voluptatibus explicabo nam? Rem dolor inventore porro exercitationem nam quia dolorum?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate atque, iusto id voluptatem ipsam error maiores architecto expedita incidunt voluptatibus explicabo nam? Rem dolor inventore porro exercitationem nam quia dolorum?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate atque, iusto id voluptatem ipsam error maiores architecto expedita incidunt voluptatibus explicabo nam? Rem dolor inventore porro exercitationem nam quia dolorum?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate atque, iusto id voluptatem ipsam error maiores architecto expedita incidunt voluptatibus explicabo nam? Rem dolor inventore porro exercitationem nam quia dolorum?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate atque, iusto id voluptatem ipsam error maiores architecto expedita incidunt voluptatibus explicabo nam? Rem dolor inventore porro exercitationem nam quia dolorum?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate atque, iusto id voluptatem ipsam error maiores architecto expedita incidunt voluptatibus explicabo nam? Rem dolor inventore porro exercitationem nam quia dolorum?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate atque, iusto id voluptatem ipsam error maiores architecto expedita incidunt voluptatibus explicabo nam? Rem dolor inventore porro exercitationem nam quia dolorum?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate atque, iusto id voluptatem ipsam error maiores architecto expedita incidunt voluptatibus explicabo nam? Rem dolor inventore porro exercitationem nam quia dolorum?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate atque, iusto id voluptatem ipsam error maiores architecto expedita incidunt voluptatibus explicabo nam? Rem dolor inventore porro exercitationem nam quia dolorum?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate atque, iusto id voluptatem ipsam error maiores architecto expedita incidunt voluptatibus explicabo nam? Rem dolor inventore porro exercitationem nam quia dolorum?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate atque, iusto id voluptatem ipsam error maiores architecto expedita incidunt voluptatibus explicabo nam? Rem dolor inventore porro exercitationem nam quia dolorum?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate atque, iusto id voluptatem ipsam error maiores architecto expedita incidunt voluptatibus explicabo nam? Rem dolor inventore porro exercitationem nam quia dolorum?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate atque, iusto id voluptatem ipsam error maiores architecto expedita incidunt voluptatibus explicabo nam? Rem dolor inventore porro exercitationem nam quia dolorum?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate atque, iusto id voluptatem ipsam error maiores architecto expedita incidunt voluptatibus explicabo nam? Rem dolor inventore porro exercitationem nam quia dolorum?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate atque, iusto id voluptatem ipsam error maiores architecto expedita incidunt voluptatibus explicabo nam? Rem dolor inventore porro exercitationem nam quia dolorum?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate atque, iusto id voluptatem ipsam error maiores architecto expedita incidunt voluptatibus explicabo nam? Rem dolor inventore porro exercitationem nam quia dolorum?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate atque, iusto id voluptatem ipsam error maiores architecto expedita incidunt voluptatibus explicabo nam? Rem dolor inventore porro exercitationem nam quia dolorum?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate atque, iusto id voluptatem ipsam error maiores architecto expedita incidunt voluptatibus explicabo nam? Rem dolor inventore porro exercitationem nam quia dolorum?</p>
        </PageContent>

        <Footer />
      </div>
    </>
  );
}

export default App;
