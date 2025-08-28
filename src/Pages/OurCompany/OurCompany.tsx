import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./OurCompany.css";
import crayons from "../../assets/images/new/codeb.jpg";

const AboutMe: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);


  return (
    <section className="company-container">
      <div className="company-content" data-aos="zoom-out">
        <strong>Frontend + Backend</strong>
        <h1 className="company-title">About Me</h1>

        <p className="company-description" data-aos="zoom-out">
          Hi, I’m <strong>Ikenna Ibeneme</strong>, a passionate software
          developer who loves turning ideas into scalable, functional, and
          beautiful products.
          <br />
          <br />
          My core expertise lies in <strong>React.js</strong> and{" "}
          <strong>React Native</strong> for building seamless user interfaces
          and cross-platform mobile apps, as well as <strong>Express.js</strong>{" "}
          for creating powerful and efficient back-end systems.
          <br />
          <br />
          I combine creativity with clean engineering practices — writing code
          that is not only efficient but also intuitive, maintainable, and built
          for growth.
          <br />
          <br />
          What sets me apart is my ability to bridge both front-end and back-end
          development while keeping a sharp focus on user experience and
          performance. Whether it’s building a new app from scratch, optimizing
          an existing product, or leading a project to scale, I thrive on making
          technology work smarter.
          <br />
          <br />I don’t just build apps — I craft digital solutions that tell a
          story and create impact.
        </p>
        <br />
 
      </div>
      <div className="company-image-container" data-aos="zoom-out">
        <img
          src={crayons}
          alt="Ikenna Ibeneme Coding"
          className="company-image"
        />
      </div>
    </section>
  );
};

export default AboutMe;
