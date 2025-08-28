import React from "react";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import me from "../../assets/projects/me.png";

const Hero: React.FC = () => {
  // FUNCTION TO OPEN EMAIL CLIENT
  const handleSendMail = () => {
    window.location.href = "mailto:ikennaibenemee@gmail.com";
  };

  return (
    <section
      style={{
        backgroundImage: `url(${me})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        filter: "grayscale(100%)",
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 120
      }}
    >
      {/* OVERLAY INLINE */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(0,0,0,0.7)", // DARK OVERLAY
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <h1 style={{ fontSize: "56px", color: "white", marginBottom: "16px" }}>
          Ibeneme Ikenna
        </h1>
        <p style={{ fontSize: "20px", color: "white", marginBottom: "24px" }}>
          Software Developer — Frontend + Backend + Mobile Apps
        </p>
        <button
          onClick={handleSendMail}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            backgroundColor: "#FFD000",
            color: "#011404",
            padding: "12px 24px",
            fontSize: "18px",
            fontWeight: "bold",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Contact Me
          <IoArrowForwardCircleSharp color="#011404" fontSize={32} />
        </button>

        <div
          style={{
            marginTop: "48px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <span style={{ color: "#FFD000", fontSize: "24px" }}>
            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
          </span>
          <p style={{ fontSize: "16px", color: "#FFD000", margin: 0 }}>
            Building Scalable & Modern Applications
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;