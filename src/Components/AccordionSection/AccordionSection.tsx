/**
 * AccordionSection Component
 * Author: Ikenna Ibenememe
 *
 * Description:
 * AOS-animated accordion to showcase offered services.
 * Supports expandable/collapsible sections with icons.
 */

import { useEffect, useState } from "react";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";
import "./AccordionSection.css";

// Service Sections Data
const sections = [
  {
    title: "Branding",
    items: [
      "Logo Design",
      "Brand Guidelines",
      "Collateral Design",
      "Rebranding Services",
    ],
  },
  {
    title: "UX/UI Designs",
    items: [
      "User Research & Analysis",
      "Wireframing & Prototyping",
      "User Interface Design",
      "User Experience Testing",
      "Responsive Design Solutions",
    ],
  },
  {
    title: "Web Development",
    items: [
      "Responsive Website Design",
      "Frontend Development (React, Vue)",
      "Backend Development (Node.js, PHP)",
      "CMS Integration (WordPress, etc.)",
    ],
  },
  {
    title: "Mobile App Development",
    items: [
      "Cross-Platform Apps (React Native, Flutter)",
      "iOS & Android Native Development",
      "App Store Deployment & Optimization",
    ],
  },
  {
    title: "Software Development",
    items: [
      "Custom Software Solutions",
      "Enterprise Applications",
      "SaaS Product Development",
    ],
  },
  {
    title: "AI Models Development",
    items: [
      "Custom AI/ML Model Training",
      "Natural Language Processing",
      "Computer Vision Applications",
      "AI Integration into Apps",
    ],
  },
  {
    title: "Server Development",
    items: [
      "Scalable API Architecture",
      "Database Optimization & Management",
      "Microservices & Cloud Infrastructure",
      "Real-Time Systems (Sockets, Queues)",
    ],
  },
];

const AccordionSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <div className="accordion-container">
      <p className="accordion-header">Ibeneme's Services</p>
      {sections.map((section, index) => (
        <div key={index} className="accordion-item">
          <button
            onClick={() => toggleSection(index)}
            className="accordion-button"
            data-aos="zoom-out"
          >
            <span className="accordion-title">{section.title}</span>
            <IoArrowBackCircleSharp
              className={`accordion-icon ${
                openIndex === index ? "open" : ""
              }`}
            />
          </button>

          {openIndex === index && (
            <ul className="accordion-content">
              {section.items.map((item, idx) => (
                <li key={idx} className="accordion-list-item">
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default AccordionSection;