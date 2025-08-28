import React, { useEffect } from "react";
import "./HowWeWorkComponent.css";
import {
  FaProjectDiagram,
  FaUsers,
  FaClock,
  FaHandshake,
  FaCogs,
  FaComments,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../../assets/images/logo/white.png";

const howWeWorkSteps = [
  {
    icon: <FaComments className="hww-icon" />,
    title: "Discovery & Consultation",
    description:
      "Every successful project starts with a conversation. We sit down to understand your business, target users, key challenges, and goals. This foundational phase ensures we’re solving the right problem from the start.",
  },
  {
    icon: <FaProjectDiagram className="hww-icon" />,
    title: "Planning & Onboarding",
    description:
      "After discovery, we define clear milestones and success metrics. You’ll be onboarded to our client dashboard to view timelines, deliverables, and communicate directly with the team. Full visibility, always.",
  },
  {
    icon: <FaCogs className="hww-icon" />,
    title: "Design & Development",
    description:
      "Our design team creates wireframes and prototypes while engineers build using clean architecture. We work in agile sprints, delivering features early to gather feedback quickly.",
  },
  {
    icon: <FaUsers className="hww-icon" />,
    title: "Transparent Client Access",
    description:
      "You’ll have real-time access to progress updates, task boards, and reports. See what we’re building, review features, and give feedback whenever you like.",
  },
  {
    icon: <FaClock className="hww-icon" />,
    title: "Flexible Payment Options",
    description:
      "We offer flexible billing fixed-price, milestone-based, or retainers. No surprises. We’re here to support your budget and scale with you.",
  },
  {
    icon: <FaHandshake className="hww-icon" />,
    title: "Long-Term Partnership",
    description:
      "Beyond delivery, we offer support, upgrades, and monitoring. We’re your long-term tech partner, not just a vendor.",
  },
];

const HowWeWorkComponent: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <section style={{ backgroundColor: "#011404" }}>
      <section className="how-we-work">
        <img src={logo} alt="logo" width={120} style={{ marginBottom: 12 }} />
        <h1 className="hww-title">How We Work</h1>
        <p className="hww-subtitle">
          At Boring Thinkers, we don’t just build software, we architect
          solutions that solve real problems. Our process is built around
          transparency, creativity, and delivering measurable results.
        </p>

        <div className="hww-steps">
          {howWeWorkSteps.map((step, index) => (
            <div className="hww-step" data-aos="zoom-out" key={index}>
              {step.icon}
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default HowWeWorkComponent;
