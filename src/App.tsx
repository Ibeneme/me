import { Suspense, lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Cursor from "./components/layout/Cursor";
import LoadingScreen from "./components/layout/LoadingScreen";
import PageTransition from "./components/layout/PageTransition";
import Contact from "./sections/Contact";
import { ScrollTrigger } from "./lib/gsap";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function App() {
  // Re-measure scroll animations once fonts and images have settled
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    document.fonts?.ready.then(refresh);
    return () => window.removeEventListener("load", refresh);
  }, []);

  return (
    <>
      <LoadingScreen />
      <PageTransition />
      <Cursor />
      <div className="grain" aria-hidden />
      <Navbar />
      <Suspense fallback={<div className="min-h-screen bg-ink" />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
