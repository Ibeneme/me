import img1 from "../../assets/images/us/mission.png";
import srm from "../../assets/images/us/vision.png";
import FAQPage from "../Faqs/FAQPage";
import Section from "../Section/Section";

const AboutUsComponent = () => {
  // Function to handle opening the email client
  const openEmail = () => {
    window.location.href = "mailto:boringthinkers@gmail.com";
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
        padding: 0,
        width: '100vw'
      }}
    >
      {/* Our Vision Section */}
      <Section
        title="Our Vision"
        description="We aim to become a leading provider of innovative software products that simplify daily challenges. 
        Our goal is to empower individuals and organizations to work more efficiently, making life easier and more productive. 
        By focusing on simplicity and effectiveness, we envision a world where technology seamlessly integrates into daily life, reducing complexity and allowing users to focus on what matters most. 
        In clearer terms, we aim to create a society where complex activities become so simple and boring to do."
        buttonText="Contact Us"
        imgSrc={img1} // Replace with a relevant image
        status="Vision"
        onButtonClick={openEmail}
        ctaBgColor="#FFD000"
        ctaTextColor="#011404"
        about
      />

      {/* Our Mission Section */}
      <Section
        title="Our Mission"
        description="Our mission is to design and deliver reliable, user-centric software solutions that address real-world problems. 
        We are committed to creating products that not only meet user needs but also exceed expectations, empowering users to accomplish more with less effort. 
        Through thoughtful research, ideation, design, development, and continuous improvement, we are dedicated to creating software solutions that solve practical problems. 
        With a relentless focus on the real needs of our users, we aim to simplify tasks, enhance productivity, and improve everyday experiences. 
        Our goal is to empower individuals and organizations to work smarter, not harder, by delivering intuitive, reliable products that make life easier."
        buttonText="Contact Us"
        imgSrc={srm} // Replace with a relevant image
        status="Mission"
        onButtonClick={openEmail}
        reverse={true}
        ctaBgColor="#FFD000"
        ctaTextColor="#011404"
        about
      />
      <FAQPage />
    </div>
  );
};

export default AboutUsComponent;
