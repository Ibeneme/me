import PageHero from "../sections/PageHero";
import AboutDetails from "../sections/AboutDetails";

const AboutPage = () => (
  <main>
    <PageHero eyebrow="Who I am" title="About me" accent="web" />
    <AboutDetails />
  </main>
);

export default AboutPage;
