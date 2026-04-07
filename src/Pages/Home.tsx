import Hero from "./Hero/Hero";
import FlagsRow from "./Hero/FlagsRow";
import AccordionSection from "../Components/AccordionSection/AccordionSection";
import Projects from "../Components/Projects/Projects";
// import AccordionSection from "../Components/AccordionSection/AccordionSection";

const Home = () => {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <Hero />
      <FlagsRow />

      <Projects />
      <div>
        <AccordionSection />
      </div>
    </div>
  );
};

export default Home;
