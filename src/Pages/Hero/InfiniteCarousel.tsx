import React from "react";
import wood from "../../assets/images/snips/books.jpg";
import a from "../../assets/images/snips/cotton.jpg";
import c from "../../assets/images/snips/bike.jpg";
import d from "../../assets/images/snips/code.jpg";
import "./InfiniteCarousel.css";

const images = [
  {
    src: wood,
    title: "Edutech",
    text: "Transforming education with technology. Smart learning solutions, e-learning platforms, and AI-driven tutoring systems.",
  },
  {
    src: a,
    title: "AI & Tech",
    text: "Driving innovation with artificial intelligence. From automation to machine learning, shaping the future of smart industries.",
  },
  {
    src: c,
    title: "Logistics",
    text: "Optimizing supply chain efficiency. AI-powered tracking, route optimization, and seamless last-mile delivery solutions.",
  },
  {
    src: d,
    title: "Customer Support",
    text: "Enhancing customer experiences with AI-driven chatbots, 24/7 support, and intelligent ticketing systems for better service delivery.",
  },
];

const InfiniteCarousel: React.FC = () => {
  const getRandomLightColor = () => {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 90%, 85%)`; // pastel/light tone
  };

  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {[...images, ...images].map((item, index) => (
          <div key={index} className="carousel-card">
            <div
              className="carousel-image-container"
              style={{
                backgroundColor: getRandomLightColor(),
                marginRight: 12,
                borderRadius: 24,
              }}
            >
              {/* <img
                src={item.src}
                alt={`carousel-img-${index}`}
                className="carousel-image"
              /> */}

              <div className="carousel-image">
                <div className="carousel-info">
                  <h3 className="carousel-title">{item.title}</h3>
                  <p className="carousel-text">{item.text}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
