import React, { useEffect } from "react";
import "./Projects.css";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

// Thumbnails
import nexus from "../../assets/projects/nexus.png";
import padiman from "../../assets/projects/padiman.png";
import zaeda from "../../assets/projects/zaeda.png";
import oberon from "../../assets/projects/oberon.png";
import pickars from "../../assets/projects/pickars.png";
import bulkup from "../../assets/projects/bulkup.png";
import emperor from "../../assets/projects/emperor.png";
import touchpfy from "../../assets/projects/touchpfy.png";

// NEW IMAGES
import drones from "../../assets/projects/drones.png";
import kraft from "../../assets/projects/kraft.png";

const sampleProjects = [
  {
    id: 0,
    title: "Quad Drone",
    company: "Quad Drone",
    role: "A futuristic drone control and product experience site showcasing 3D animations, motion effects, and a modern drone ecosystem.",
    thumbnail: drones,
    link: "https://drones-jou9.onrender.com/",
  },
  {
    id: 9,
    title: "CloneKraft",
    company: "CloneKraft",
    role: "A digital brand site featuring modern UI, deep color themes, smooth transitions, and a stunning presentation of the CloneKraft identity.",
    thumbnail: kraft,
    link: "https://www.clonekraft.com/",
  },
  {
    id: 2,
    title: "Pickars",
    company: "Pickars",
    role: "A courier logistics platform for fast and reliable bike deliveries.",
    thumbnail: pickars,
    link: "https://www.pickars.com",
  },
  {
    id: 3,
    title: "Bulkupdata",
    company: "Bulkupdata",
    role: "Airtime and data top-up platform for individuals and SMEs.",
    thumbnail: bulkup,
    link: "https://www.bulkupdata.com",
  },
  // Your existing projects...
  {
    id: 1,
    title: "Emperor Guild Tech",
    company: "Emperor Guild Tech",
    role: "The parent company powering innovation across logistics, fintech, AI, and real estate tech.",
    thumbnail: emperor,
    link: "https://www.emperorguildtech.com",
  },

  {
    id: 4,
    title: "Padiman Route",
    company: "Padiman Route",
    role: "Modern property and housing management platform.",
    thumbnail: padiman,
    link: "https://www.padimanroute.com",
  },
  {
    id: 5,
    title: "Nexus Music Publishing",
    company: "Nexus Music",
    role: "A digital-first music publishing platform empowering creators.",
    thumbnail: nexus,
    link: "https://nexusmusicpublishing.com/",
  },
  {
    id: 6,
    title: "Zaeda Oracle",
    company: "Zaeda Oracle",
    role: "A strategic consulting and digital solutions company.",
    thumbnail: zaeda,
    link: "https://zaedaoracle.com/",
  },
  {
    id: 7,
    title: "Oberon HR",
    company: "Oberon HR",
    role: "Workforce management and HR optimization suite.",
    thumbnail: oberon,
    link: "https://www.oberonhr.com/",
  },
  {
    id: 8,
    title: "Touchpfy",
    company: "Touchpfy",
    role: "Fintech platform enabling seamless mobile payments.",
    thumbnail: touchpfy,
    link: "https://touchpfy.com/",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const NewProjects: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <section className="projects">
      <div className="projects-header">
        <h2 className="section-title">My Recent Projects (2024 - 2025)</h2>
        <p className="section-description">
          A showcase of the apps, platforms, and products I’ve worked on — from
          logistics and fintech to full brand experiences and immersive web
          apps.
        </p>
      </div>

      <div className="projects-grid">
        {sampleProjects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card"
            data-aos="zoom-out"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 15px 40px rgba(0,0,0,0.15)",
              padding: 16
            }}
          >
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
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default NewProjects;
