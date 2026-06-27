import { Suspense, lazy } from "react";
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
const AboutPage = lazy(() => import("./Pages/AboutPage")); // Move your "About" logic into a single page file

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Suspense fallback={<LoadingScreen />}>
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