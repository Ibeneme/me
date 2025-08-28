import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "./Section.css"; // Import CSS file
import { IoArrowForwardCircleSharp } from "react-icons/io5";

interface SectionProps {
  title: string;
  description: string;
  buttonText: string;
  imgSrc: string;
  reverse?: boolean; // To alternate image position
  onButtonClick: () => void; // Add onClick handler for the button
  status?: string; // The status that can be 'Production', 'Testing', or 'Development'
  ctaBgColor?: string; // Background color for CTA button
  ctaTextColor?: string; // Text color for CTA button
  about?: boolean;
}

const Section: React.FC<SectionProps> = ({
  title,
  description,
  buttonText,
  imgSrc,
  reverse = false,
  status,
  onButtonClick,
  ctaBgColor = "#011404", // Default background color
  ctaTextColor = "#ffffff", // Default text color
  about,
}) => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a custom duration
  }, []);

  // Define the styles based on the status
  // const getStatusStyles = (status?: string) => {
  //   switch (status) {
  //     case "Production":
  //       return {
  //         color: "green",
  //         backgroundColor: "rgba(0, 255, 0, 0.20)",
  //       };
  //     case "Testing":
  //       return {
  //         color: "orange",
  //         backgroundColor: "rgba(255, 165, 0, 0.12)",
  //       };
  //     case "Development":
  //       return {
  //         color: "#ff0000",
  //         backgroundColor: "#ff000021",
  //       };
  //     default:
  //       return {
  //         color: "black",
  //         backgroundColor: "rgba(0, 0, 0, 0.1)",
  //       };
  //   }
  // };
  // const statusStyles = getStatusStyles(status);

  return (
    <section
      // data-aos="zoom-out"
      className={`section-container ${reverse ? "reverse" : ""}`}
    >
      <div
        className="text-content"
        //data-aos="zoom-out"
      >
        {!about && (
          <div
            style={{
              padding: `8px 8px`,
              borderRadius: 24,
              color: "#21AA11",
              backgroundColor: "#21AA11120",
              width: "fit-content",
              marginBottom: 4,
              fontSize: 12,
            }}
          >
            <p>{status || "Not Provided"}</p>
          </div>
        )}

        <h2 className="section-title">{title}</h2>
        <p className="section-description">{description}</p>
        <button
          // data-aos="zoom-out"
          onClick={onButtonClick}
          className="cta"
          style={{
            backgroundColor: ctaBgColor,
            color: ctaTextColor,
            borderColor: ctaBgColor,
          }}
        >
          {buttonText}
          <IoArrowForwardCircleSharp color={ctaTextColor} fontSize={48} />
        </button>
      </div>
      <div className="image-content">
        <img
          // data-aos="zoom-out"
          src={imgSrc}
          alt={title}
          className="section-image"
        />
      </div>
    </section>
  );
};

export default Section;
