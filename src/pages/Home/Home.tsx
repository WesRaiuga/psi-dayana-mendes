import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import AboutMeSection from "../../views/AboutMeSection/AboutMeSection";
import EducationSection from "../../views/EducationSection/EducationSection";
import Divider from "../../components/Divider/Divider";
import FaqSection from "../../views/FaqSection/FaqSection";
import SymptomsSection from "../../views/SymptomsSection/SymptomsSection";
import HowItWorksSection from "../../views/HowItWorksSection/HowItWorksSection";
import ApproachSection from "../../views/ApproachSection/ApproachSection";
import ServicesSection from "../../views/ServicesSection/ServicesSection";

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
      <SymptomsSection />
      <HowItWorksSection />
      <ApproachSection />
      <ServicesSection />
      <FaqSection />
    </>
  );
};

export default Home;
