import React from "react";
import "./Careers.css"; // Custom styles for this component
import pencils from "../../assets/images/new/codeb.jpg";

const Careers: React.FC = () => {
  return (
    <section className="careers-section">
      <div className="careers-message">
        <h2 className="careers-title">Join Our Team</h2>
        <p className="careers-description">
          At Boring Thinkers, we are always looking for talented and passionate
          individuals to join our growing team. We believe in fostering a
          collaborative environment where everyone has the opportunity to
          thrive, innovate, and make an impact.
        </p>
        <p className="careers-status">
          Currently, there are no ongoing job applications. However, we
          encourage you to check back regularly as exciting opportunities are
          always on the horizon.
        </p>
        <p className="careers-contact">
          Feel free to reach out to us, if you have any inquiries or would like
          to express your interest for future roles.
        </p>

        <img
          src={pencils}
          alt="Our Mission"
          style={{
            width: "100%",
            borderRadius: 12,
            marginTop: 48,
            maxHeight: 400,
            objectFit:'cover'
          }}
        />
      </div>
    </section>
  );
};

export default Careers;
