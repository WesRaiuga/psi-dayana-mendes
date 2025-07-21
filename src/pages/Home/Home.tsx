import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import AboutMeSection from "../../views/AboutMeSection/AboutMeSection";
import IntersectingWavesDivider from "../../components/dividers/IntersectingWavesDivider/IntersectingWavesDivider";
import BubbleSideDivider from "../../components/dividers/BubbleSideDivider/BubbleSideDivider";
import FaqSection from "../../views/FaqSection/FaqSection";
import SymptomsSection from "../../views/SymptomsSection/SymptomsSection";
import AboutTherapy from "../../views/AboutTherapySection/AboutTherapySection";
import ApproachSection from "../../views/ApproachSection/ApproachSection";
import ServicesSection from "../../views/ServicesSection/ServicesSection";

const Home = () => {
  const highlightedSessionColor = "#DEE8FE";
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
      <BubbleSideDivider color={highlightedSessionColor} />

      <SymptomsSection />
      <IntersectingWavesDivider color={highlightedSessionColor} />

      <AboutTherapy />

      <AboutMeSection />

      <ApproachSection />
      <BubbleSideDivider color={highlightedSessionColor} />

      <ServicesSection />
      <IntersectingWavesDivider color={highlightedSessionColor} />

      <FaqSection />
    </>
  );
};

export default Home;
