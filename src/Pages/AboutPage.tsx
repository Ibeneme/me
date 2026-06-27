import { Suspense, lazy } from "react";
import BlogHero from "../Components/BlogHero/BlogHero";

// Lazy load complex sections
const About = lazy(() => import("../Components/Projects/About"));
const FeatureSection = lazy(() => import("../Components/Projects/FeatureSection"));
const We = lazy(() => import("../Components/We/We"));
const CurrentlySectionPage = lazy(
  () => import("../Components/Projects/CurrentlySection")
);
const AboutPage = () => {
  return (
    <div>
      {/* Hero loads instantly for immediate visual feedback */}
      <BlogHero title="About Ibeneme" />

      {/* Remaining sections load when ready */}
      <Suspense fallback={<div className="h-64 bg-[#0C0D0E]" />}>
        <About />
        <FeatureSection />
        <CurrentlySectionPage />
        <We />
      </Suspense>
    </div>
  );
};

export default AboutPage;