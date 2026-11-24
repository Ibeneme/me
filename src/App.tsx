import { Suspense, lazy, useState } from "react";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ContactUs from "./Components/Footer/ContactUs";
import LoadingScreen from "./LoadingScreen";

const Home = lazy(() => import("./Pages/Home"));
const OurProjectsPage = lazy(() => import("./Pages/OurProjectsPage"));
const NotFound = lazy(() => import("./Pages/NotFound"));
const AboutPage = lazy(() => import("./Pages/AboutPage"));

function App() {
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  return (
    <>
      <ScrollToTop />
      {isFirstLoad && <LoadingScreen minDisplayTime={3000} onComplete={() => setIsFirstLoad(false)} />}
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
