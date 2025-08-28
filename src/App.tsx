import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Home from "./Pages/Home";
import Footer from "./Components/Footer/Footer";
import AboutUsPage from "./Pages/AboutUsPage";
import OurProjectsPage from "./Pages/OurProjectsPage";
import NotFound from "./Pages/NotFound";
import Navbar from "./Components/Navbar/Navbar";
import ProjectDetails from "./Components/NewProjects/ProjectDetails";
import "./assets/fonts/fonts.css";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/projects" element={<OurProjectsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
