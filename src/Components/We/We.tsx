import dream from "../../../src/assets/images/we/dream.png";
import design from "../../../src/assets/images/we/designa.png";
import main from "../../../src/assets/images/we/main.png";
import mainb from "../../../src/assets/images/we/mainb.png";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./We.css";

const sections = [
  {
    title: "YOU DREAM IT, I BUILD IT.",
    description:
      "I’m Ikenna Ibeneme, a passionate software developer. I bring bold ideas to life by turning concepts into functional, scalable, and beautiful digital products. If I can dream it or you can imagine it I can build it.",
    bgColor: "#DFFFDC",
    image: dream,
    textColor: "#121212",
  },
  {
    title: "MY DESIGN APPROACH",
    description:
      "Simplicity with purpose. I create clean, user-friendly interfaces that focus on usability and memorable digital experiences. My design philosophy blends elegance with functionality to ensure every app feels natural.",
    bgColor: "#FFE2E9",
    image: main,
    textColor: "#121212",
  },
  {
    title: "MY DEVELOPMENT STYLE",
    description:
      "I specialize in modern web and mobile technologies including REACT.JS, REACT NATIVE, and EXPRESS.JS. My code is modular, clean, and built for scalability with strong focus on performance, flexibility, and future-proof architecture.",
    bgColor: "#E8DEFF",
    image: design,
    textColor: "#121212",
  },
  {
    title: "SPEED, SECURITY & RELIABILITY",
    description:
      "Beyond launch, I ensure projects remain secure, fast, and reliable. From proactive monitoring to continuous improvements, I deliver software that grows with your needs always optimized, always protected.",
    bgColor: "#FFEECB",
    image: mainb,
    textColor: "#121212",
  },
];

const We: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  return (
    <div className="vision-page">
      <div className="vision-grid">
        {sections.map((section, index) => (
          <section
            className="vision-section"
            style={{
              backgroundColor: section.bgColor,
              color: section.textColor,
            }}
            key={index}
            data-aos="fade-up"
          >
            <div className="vision-section-content">
              <img
                src={section.image}
                alt={section.title}
                className="vision-image"
              />
              <h2 className="vision-title" style={{ color: section.textColor }}>
                {section.title}
              </h2>
              <p
                className="vision-description"
                style={{ color: section.textColor }}
              >
                {section.description}
              </p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default We;
