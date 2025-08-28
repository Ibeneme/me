import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./AboutUs.css";
//childonglasses
import pencils from "../../assets/images/about/b.jpg";
import childonglasses from "../../assets/images/about/a.jpg";
//import crayons from "../../assets/images/new/codeb.jpg";
import AccordionSection from "../AccordionSection/AccordionSection";
// import OurCompany from "../../Pages/OurCompany/OurCompany";

interface AboutUsProps {
  showCta?: boolean;
}

const AboutUs: React.FC<AboutUsProps> = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <section className="about-page">
      {/* <OurCompany /> */}
      {/* Who We Are */}
      {/* <div className="about-section">
        <div className="about-image-first-div" data-aos="zoom-out">
          <div className="about-image">
            <img src={crayons} alt="Our Company" />
          </div>
        </div>

        <div className="about-text" data-aos="zoom-out">
          <h3 style={{ color: "#023009" }}>Our Company</h3>
          <p>
            Boring Thinkers specializes in building innovative software
            solutions for companies and startups. We simplify complex processes,
            helping businesses operate more efficiently with reliable, scalable,
            and user-friendly technology.
            <br />
            <br />
            We believe that “boring” can be powerful by eliminating unnecessary
            complexities, streamlining workflows, and focusing on what truly
            matters. Our approach is simple: identify the problem, solve the
            problem.
            <br />
            <br />
            Our products are designed to empower businesses, automate tasks, and
            drive growth while making day-to-day operations feel effortless. In
            the end, we make software that works so seamlessly, it almost feels…
            boring.
          </p>
        </div>
      </div> */}

      {/* Our Mission */}
      <div className="about-section-reverse" data-aos="zoom-out">
        <div className="about-text">
          <h3 style={{ color: "#FFD000" }}>Our Mission</h3>
          <p style={{ color: "#FFD000" }}>
            Our mission is to design and deliver reliable, user-centric software
            solutions that address real-world problems. We are committed to
            creating products that not only meet user needs but also exceed
            expectations, empowering users to accomplish more with less effort.
            <br />
            <br />
            Through thoughtful research, ideation, design, development, and
            continuous improvement, we are dedicated to creating software
            solutions that solve practical problems. With a relentless focus on
            the real needs of our users, we aim to simplify tasks, enhance
            productivity, and improve everyday experiences.
          </p>
        </div>

        <div className="about-image-first-div" >
          <div className="about-image">
            <img src={pencils} alt="Our Mission" />
          </div>
        </div>
      </div>

      {/* Our Vision */}
      <div className="about-section">
        <div className="about-image-first-div" data-aos="zoom-out">
          <div className="about-image">
            <img src={childonglasses} alt="Our Vision" />
          </div>
        </div>

        <div className="about-text" data-aos="zoom-out">
          <h3 style={{ color: "#023009" }}>Our Vision</h3>
          <p>
            We aim to become a leading provider of innovative software products
            that simplify daily challenges. Our goal is to empower individuals
            and organizations to work more efficiently, making life easier and
            more productive.
            <br />
            <br />
            By focusing on simplicity and effectiveness, we envision a world
            where technology seamlessly integrates into daily life, reducing
            complexity and allowing users to focus on what matters most.
          </p>
        </div>
      </div>

      <AccordionSection />
    </section>
  );
};

export default AboutUs;
