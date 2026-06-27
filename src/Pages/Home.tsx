
import Hero from "./Hero/Hero";
import FlagsRow from "./Hero/FlagsRow";
import Projects from "../Components/Projects/Projects"
import AccordionSection from "../Components/AccordionSection/AccordionSection"
import SlidingPage from "../Components/Footer/SlidingPage"


const Home = () => {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <Hero />
      <FlagsRow />
      <Projects />
      <AccordionSection />
      <SlidingPage />
    </div>
  );
};

export default Home;
