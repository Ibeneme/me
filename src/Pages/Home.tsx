import { Suspense, lazy } from "react";
import Hero from "./Hero/Hero";
import FlagsRow from "./Hero/FlagsRow";

// Lazy load heavy components that are below the fold
const Projects = lazy(() => import("../Components/Projects/Projects"));
const AccordionSection = lazy(
  () => import("../Components/AccordionSection/AccordionSection")
);
const SlidingPage = lazy(() => import("../Components/Footer/SlidingPage"));

const Home = () => {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      {/* Hero and Flags are Critical: Load immediately */}
      <Hero />
      <FlagsRow />

      {/* Below-the-fold content: Loaded on demand */}
      <Suspense fallback={<div className="h-40" />}>
        <Projects />
        <div>
          <AccordionSection />

          <SlidingPage />
        </div>
      </Suspense>
    </div>
  );
};

export default Home;
