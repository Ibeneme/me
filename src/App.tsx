import { Suspense, lazy, useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ContactUs from "./Components/Footer/ContactUs";
import LoadingScreen from "./LoadingScreen";
import "./assets/fonts/fonts.css";

const Home = lazy(() => import("./Pages/Home"));
const OurProjectsPage = lazy(() => import("./Pages/OurProjectsPage"));
const NotFound = lazy(() => import("./Pages/NotFound"));
const AboutPage = lazy(() => import("./Pages/AboutPage"));

function App() {
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    // Ensures the loader stays active for exactly 10 seconds on initial application mount
    const timer = setTimeout(() => {
      setIsFirstLoad(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ScrollToTop />
      {/* Show custom LoadingScreen during the initial 10-second window */}
      {isFirstLoad && <LoadingScreen minDisplayTime={4000} />}
      <Navbar />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<OurProjectsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
