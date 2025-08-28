import React, { useEffect, useRef } from "react";
import "./OurTeam.css"; // Import the CSS file for styling

import ibenemeImage from "../../assets/images/team/me.jpeg";
import divineImage from "../../assets/images/team/divine.jpg";
//import main from "../../assets/images/main.jpg";
import reevesImage from "../../assets/images/team/reeves.jpg";
//import ernestImage from "../../assets/images/team/ernest.png";
//import bonaventureImage from "../../assets/images/team/me.jpeg";
import wilson from "../../assets/images/team/mudi.jpg";

const teamMembers = [
  {
    name: "Ibeneme, Benjamin-Ikenna",
    title: "Founder & CEO | CTO | Mobile App Lead",
    leadRole: "CEO, CTO & Mobile App Lead",
    bio: "Founder of Boring Thinkers, Ikenna leads tech and mobile innovation with 5+ years building fast, scalable apps using MERN and React Native.",
    image: ibenemeImage,
    twitter: "https://x.com/Ibeneme_Ikenna",
  },
  {
    name: "Reeves Akwa",
    title: "Python & Cloud Developer",
    leadRole: "Cloud & Backend Lead",
    bio: "Reeves architects cloud solutions and backend systems, powering stable, secure platforms across all projects.",
    image: reevesImage,
    twitter: "https://www.linkedin.com/in/reeves-akwa-97ab5b165/",
  },
  {
    name: "Wilson Ofiavwe",
    title: "Sales & Marketing Specialist",
    leadRole: "Sales Lead",
    bio: "Wilson drives sales and branding with a creative edge, blending marketing insight and design to grow user engagement.",
    image: wilson,
    twitter: "https://x.com/madebymudi",
  },
  // {
  //   name: "Ernest Nwankwo",
  //   title: "Fullstack Developer",
  //   leadRole: "Web Development Lead",
  //   bio: "Ernest crafts sleek, fullstack web apps with strong MERN expertise, ensuring seamless digital experiences.",
  //   image: ernestImage,
  // },
  {
    name: "Divine Chibueze",
    title: "Graphics & UI/UX Designer",
    leadRole: "Design Lead",
    bio: "Divine shapes bold, intuitive interfaces and brand visuals, guiding the design direction at Boring Thinkers.",
    image: divineImage,
    twitter: "",
  },
];

const OurTeam: React.FC = () => {
  const overlayRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show-content");
          } else {
            entry.target.classList.remove("show-content");
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the item is in view
    );

    overlayRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      overlayRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="our-team">
      <div
        style={{
          maxWidth: 1400,
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2 className="section-header-teams">Our Team Leads</h2>
        <p className="section-paragraph-teams">Profiles of Key Team Members</p>
        <div className="team-members">
          {teamMembers.map((member, index) => (
            <div className="team-member" key={index}>
              <div className="team-member-image">
                <img src={member.image} alt={member.name} />
                <div className="team-member-bio">
                  <p>
                    <strong>{member.leadRole}</strong>
                  </p>
                  <p>{member.bio}</p>
                </div>
              </div>
              <div className="team-member-info">
                <h3>{member.name}</h3>
                <p>{member.leadRole}</p>
                {/* {member.twitter && (
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      backgroundColor: "#000",
                      color: "#C4D92E",
                      padding: "4px 12px",
                    }}
                  >
                    Get to Know
                  </a>
                )} */}
                <p>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default OurTeam;
