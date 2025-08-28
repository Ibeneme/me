import React from "react";
import "./ContactUs.css";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { IoArrowForwardCircleSharp } from "react-icons/io5";

const ContactUs: React.FC = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h1 className="contact-title">Reach Out to Us</h1>
        <p className="contact-description">
          We're here to help you innovate. Reach out to discuss your next big
          project or to learn how our tailored software solutions can accelerate
          your business.
        </p>

        <div className="contact-buttons">
          <a
            href="mailto:ikennaibenemee@gmail.com"
            className="contact-button mail-button"
          >
            <span
              style={{
                flexDirection: "row",
                display: "flex",
                justifyContent: "center",
                gap: 12,
              }}
            >
              <FaEnvelope className="contact-icon" />
              Send a Mail
            </span>
            <IoArrowForwardCircleSharp className="arrow-icon" />
          </a>

          <a
            href="https://wa.me/2348120710198"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button whatsapp-button"
          >
            <span
              style={{
                flexDirection: "row",
                display: "flex",
                justifyContent: "center",
                gap: 12,
              }}
            >
              <FaWhatsapp className="contact-icon" />
              Chat on WhatsApp
            </span>
            <IoArrowForwardCircleSharp className="arrow-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
