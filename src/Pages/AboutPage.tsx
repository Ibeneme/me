import { Suspense, lazy } from "react";
import BlogHero from "../Components/BlogHero/BlogHero";

// Lazy load complex sections
const About = lazy(() => import("../Components/Projects/About"));


// Skeletons sized close to the real sections so there's no layout jump
// when each one pops in.
const AboutSkeleton = () => (
  <div className="min-h-[70vh] bg-[#0A0314] animate-pulse" />
);



const AboutPage = () => {
  return (
    <main className="bg-[#0A0314]">
      {/* Hero loads instantly for immediate visual feedback */}
      <BlogHero title="About Ibeneme" />

      {/* Separate boundaries so a slow section never blocks the one after it */}
      <Suspense fallback={<AboutSkeleton />}>
        <About />
      </Suspense>

      {/* <Suspense fallback={<CurrentlySkeleton />}>
        <CurrentlySectionPage />
      </Suspense> */}

      {/* <We /> */}
    </main>
  );
};

export default AboutPage;
