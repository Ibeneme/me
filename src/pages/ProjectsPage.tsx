import PageHero from "../sections/PageHero";
import SelectedWork from "../sections/SelectedWork";
import LiveApps from "../sections/LiveApps";

const ProjectsPage = () => (
  <main>
    <PageHero eyebrow="2025 — 26" title="Projects" accent="mobile" />
    <div className="container-x">
      <div className="hairline" />
    </div>
    <SelectedWork />
    <LiveApps />
  </main>
);

export default ProjectsPage;
