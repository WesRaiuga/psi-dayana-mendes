import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// import style from "./Home.module.css";
import Banner from "../../components/Banner/Banner";
import AboutMeSection from "../../views/AboutMeSection/AboutMeSection";
import EducationSection from "../../views/EducationSection/EducationSection";
import Divider from "../../components/Divider/Divider";
import FaqSection from "../../views/FaqSection/FaqSection";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollTo = location.state?.scrollTo;
    if (scrollTo) {
      const scrollTarget = document.getElementById(scrollTo);
      if (scrollTarget) {
        scrollTarget.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <Banner />
      {/* <div className={style.gradient}></div> */}
      <AboutMeSection />
      <Divider color="#5b99a1" />
      <EducationSection />
      <FaqSection />
    </>
  );
};

export default Home;
