import { Suspense, lazy } from "react";

const About = lazy(() => import("../Components/Projects/About"));

const AboutSkeleton = () => (
  <div className="min-h-[70vh] bg-[#0A0314] animate-pulse" />
);

const AboutPage = () => {
  return (
    <main className="bg-[#0A0314]">
      <Suspense fallback={<AboutSkeleton />}>
        <div className="relative">
          <h2 className="mt-[140px] mb-[96px] text-[64px] sm:text-[100px] md:text-[160px] lg:text-[220px] xl:text-[250px] font-bold text-[#ffffff] tracking-tighter leading-none select-none text-center">
            Ibeneme <span style={{ color: "#ffd000" }}>.</span>
          </h2>
        </div>

        <About />
      </Suspense>
    </main>
  );
};

export default AboutPage;
