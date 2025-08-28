import Hero from "./Hero/Hero";
import FlagsRow from "./Hero/FlagsRow";
import OurCompany from "./OurCompany/OurCompany";
import We from "../Components/We/We";
import AccordionSection from "../Components/AccordionSection/AccordionSection";
import SlidingPage from "../Components/Footer/SlidingPage";
import NewProjects from "../Components/NewProjects/Projects";
// import AccordionSection from "../Components/AccordionSection/AccordionSection";

const Home = () => {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <Hero />
      <FlagsRow />
      <OurCompany />
      <SlidingPage />
      <We />
      <NewProjects />
      <div style={{ padding: 16, width: "100vw" }}>
        <AccordionSection />
      </div>

    </div>
  );
};

export default Home;
