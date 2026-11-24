import Hero from "./Hero/Hero";
import FlagsRow from "./Hero/FlagsRow";
import Disciplines from "../Components/Disciplines/Disciplines";
import Projects from "../Components/Projects/Projects";

const Home = () => (
  <main className="bg-ink">
    <Hero />
    <Disciplines />
    <Projects />
    <FlagsRow />
  </main>
);

export default Home;
