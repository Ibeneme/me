import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Home from "./Pages/Home";
import Footer from "./Components/Footer/Footer";
import OurProjectsPage from "./Pages/OurProjectsPage";
import NotFound from "./Pages/NotFound";
import Navbar from "./Components/Navbar/Navbar";
import ProjectDetails from "./Components/NewProjects/ProjectDetails";
import "./assets/fonts/fonts.css";
import AboutMe from "./Components/Projects/About";
import BlogHero from "./Components/BlogHero/BlogHero";
import We from "./Components/We/We";
import ContactUs from "./Components/Footer/ContactUs";
import FeatureSection from "./Components/Projects/FeatureSection";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <>
              <BlogHero title="About Ibeneme" />
              <AboutMe />
              <FeatureSection />
              <We />
            </>
          }
        />
        <Route path="/projects" element={<OurProjectsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
