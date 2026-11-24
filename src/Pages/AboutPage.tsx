import { Suspense, lazy } from "react";
import PageHero from "../Components/BlogHero/BlogHero";

const About = lazy(() => import("../Components/Projects/About"));

const AboutPage = () => (
  <main className="bg-ink">
    <PageHero eyebrow="Who I am" title="About me" />
    <Suspense fallback={<div className="min-h-[70vh] bg-ink" />}>
      <About />
    </Suspense>
  </main>
);

export default AboutPage;
