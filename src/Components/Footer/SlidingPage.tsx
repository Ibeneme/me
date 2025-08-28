import React from "react";
import "./SlidingPage.css";

const SlidingPage: React.FC = () => {
  return (
    <div className="sliding-page">
      <div className="sliding-track">
        <span className="sliding-text">
          {"REACT.JS • REACT NATIVE • EXPRESS.JS • BACKEND DEVELOPMENT • MOBILE APPS • APIS • NODE.JS • FRONTEND • DATABASE DESIGN • CLOUD DEPLOYMENT • ".repeat(
            10
          )}
        </span>
        <span className="sliding-text">
          {"REACT.JS • REACT NATIVE • EXPRESS.JS • BACKEND DEVELOPMENT • MOBILE APPS • APIS • NODE.JS • FRONTEND • DATABASE DESIGN • CLOUD DEPLOYMENT • ".repeat(
            10
          )}
        </span>
      </div>
    </div>
  );
};

export default SlidingPage;
