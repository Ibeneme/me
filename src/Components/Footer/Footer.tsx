import { Link } from "react-router-dom";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";
import ContactUs from "./ContactUs";
import SlidingPage from "./SlidingPage";

interface FooterProps {
  hideContactUs?: boolean;
  showContactUs?: boolean;
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <section>
      <SlidingPage />
      <ContactUs />
      <footer className="footer">
        <div className="footer-content">
          {/* Left Section */}
          <div className="footer-left">
            <div className="footer-logo-section"></div>
            <p className="footer-description">
              Hi, I’m <strong>Ikenna Ibeneme</strong>, a passionate software
              developer who loves turning ideas into scalable, functional, and
              beautiful products.
              <br />
            </p>

            {/* ✅ Email Links with Icons */}
            <div className="footer-emails">
              <p
                style={{
                  alignItems: "center",
                  display: "flex",
                  gap: 8,
                }}
              >
                <span
                  style={{
                    backgroundColor: "#FFD00024",
                    borderRadius: 12,
                    padding: 12,
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    width: "fit-content",
                  }}
                >
                  <FaEnvelope style={{ color: "#FFD000" }} />
                </span>{" "}
                <a
                  href="mailto:ikennaibenemee@gmail.com"
                  style={{ color: "#FFD000" }}
                >
                  ikennaibenemee@gmail.com
                </a>
              </p>
              <br />

              <p
                style={{
                  alignItems: "center",
                  display: "flex",
                  gap: 8,
                }}
              >
                <span
                  style={{
                    backgroundColor: "#FFD00024",
                    borderRadius: 12,
                    padding: 12,
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    width: "fit-content",
                  }}
                >
                  <FaPhone style={{ color: "#FFD000" }} />
                </span>{" "}
                <a href="tel:+2348120710198" style={{ color: "#FFD000" }}>
                  (+234) 812 071 0198
                </a>
              </p>
              <br />
              <p
                style={{
                  alignItems: "center",
                  display: "flex",
                  gap: 8,
                }}
              >
                <span
                  style={{
                    backgroundColor: "#25D36624", // WhatsApp green tint
                    borderRadius: 12,
                    padding: 12,
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    width: "fit-content",
                  }}
                >
                  <FaWhatsapp style={{ color: "#25D366" }} />
                </span>{" "}
                <a
                  href="https://wa.me/2348120710198"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#25D366" }}
                >
                  WhatsApp Chat
                </a>
              </p>
            </div>
            <br />
            <br />
          </div>

          {/* Right Section */}

          <div className="footer-right">
            {/* <Link to="/about-us" className="footer-link">
              About Us
            </Link> */}
            <Link to="/projects" className="footer-link">
            My Projects
            </Link>
            {/* <Link to="/team" className="footer-link">
              Our Team
            </Link>
            <Link to="/careers" className="footer-link">
              Careers
            </Link>
            <Link to="/privacy-policy" className="footer-link">
              Privacy Policy
            </Link> */}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom" style={{ color: "#fff" }}>
          <p>
            © {new Date().getFullYear()} Ibeneme. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
