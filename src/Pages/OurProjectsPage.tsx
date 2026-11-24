import PageHero from "../Components/BlogHero/BlogHero";
import CurrentlySection from "../Components/Projects/CurrentlySection";
import Projects from "../Components/Projects/Projects";

const OurProjectsPage = () => (
  <div className="bg-ink">
    <PageHero eyebrow="2025 — 26" title="Projects" accent="mobile" />
    <div className="container-x">
      <div className="hairline" />
    </div>
    <Projects />
    <CurrentlySection />
  </div>
);

export default OurProjectsPage;
