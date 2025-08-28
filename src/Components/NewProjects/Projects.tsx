import React, { useEffect } from "react";
import "./Projects.css";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";

// ✅ Project thumbnails
import nexus from "../../assets/projects/nexus.png";
import padiman from "../../assets/projects/padiman.png";
import zaeda from "../../assets/projects/zaeda.png";
import oberon from "../../assets/projects/oberon.png";
import pickars from "../../assets/projects/pickars.png";
import bulkup from "../../assets/projects/bulkup.png";
import emperor from "../../assets/projects/emperor.png";
import touchpfy from "../../assets/projects/touchpfy.png";

const sampleProjects = [
  {
    id: 1,
    title: "Emperor Guild Tech",
    company: "Emperor Guild Tech",
    role: "The parent company powering innovation across logistics, fintech, AI, and real estate tech. Building scalable products with purpose.",
    thumbnail: emperor,
    link: "https://www.emperorguildtech.com",
  },
  {
    id: 2,
    title: "Pickars",
    company: "Pickars",
    role: "A courier logistics platform for fast and reliable bike deliveries, connecting businesses and individuals with trusted riders.",
    thumbnail: pickars,
    link: "https://www.pickars.com",
  },
  {
    id: 3,
    title: "Bulkupdata",
    company: "Bulkupdata",
    role: "An airtime and data top-up platform for individuals and SMEs, designed for speed, simplicity, and scale.",
    thumbnail: bulkup,
    link: "https://www.bulkupdata.com",
  },
  {
    id: 4,
    title: "Padiman Route",
    company: "Padiman Route",
    role: "A modern property and housing management web solution, simplifying access to real estate tools online.",
    thumbnail: padiman,
    link: "https://www.padimanroute.com",
  },
  {
    id: 5,
    title: "Nexus Music Publishing",
    company: "Nexus Music",
    role: "A digital-first music publishing platform empowering artists, producers, and creators to protect and monetize their work.",
    thumbnail: nexus,
    link: "https://nexusmusicpublishing.com/",
  },
  {
    id: 6,
    title: "Zaeda Oracle",
    company: "Zaeda Oracle",
    role: "A strategic consulting and digital solutions company, helping businesses unlock insights and streamline operations.",
    thumbnail: zaeda,
    link: "https://zaedaoracle.com/",
  },
  {
    id: 7,
    title: "Oberon HR",
    company: "Oberon HR",
    role: "A workforce management and HR software solution designed to optimize employee performance, payroll, and compliance.",
    thumbnail: oberon,
    link: "https://www.oberonhr.com/",
  },
  {
    id: 8,
    title: "Touchpfy",
    company: "Touchpfy",
    role: "A fintech platform enabling seamless mobile payments, merchant tools, and financial empowerment for individuals and SMEs.",
    thumbnail: touchpfy,
    link: "https://touchpfy.com/",
  },
];

const NewProjects: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <section className="projects">
      <div className="projects-header">
        <h2 className="section-title">My Recent Projects (2024 - 2025)</h2>
        <p className="section-description">
          A showcase of the apps, platforms, and products I’ve worked on: from
          delivery platforms to fintech solutions. Each project highlights my
          ability to design, develop, and scale real-world solutions.
        </p>
      </div>
      <div className="projects-grid">
        {sampleProjects.map((project) => (
          <div key={project.id} className="project-card" data-aos="zoom-out">
            <img src={project.thumbnail} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.role}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ctaButtonNew"
                  style={{
                    backgroundColor: "#FFD000",
                    padding: `12px 14px`,
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    marginTop: 16,
                  }}
                >
                  <IoArrowForwardCircleSharp color="#000" fontSize={20} />
                  <p style={{ margin: 0, paddingRight: 8, color: "#000" }}>
                    Visit Site
                  </p>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewProjects;
