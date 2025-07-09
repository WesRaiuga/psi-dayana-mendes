import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import AboutMeSection from "../views/AboutMeSection/AboutMeSection";
import EducationSection from "../views/EducationSection/EducationSection";
import ContactSection from "../views/ContactSection/ContactSection";

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
      <AboutMeSection />
      <EducationSection />
      <ContactSection />
    </>
  );
};

export default Home;
