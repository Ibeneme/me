import React from "react";
import {  useNavigate } from "react-router-dom";
import "./NotFound.css"; // Optional: add custom CSS for styling
import { IoArrowForwardCircleSharp } from "react-icons/io5";

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="not-found-container">
      <h1 className="not-found-header">404 - Page Not Found</h1>
      <p className="not-found-message">
        Oops! The page you're looking for doesn't exist.
      </p>

      <button onClick={() => navigate("/")} className="cta">
        Go back to Home
        <IoArrowForwardCircleSharp color="#011404" fontSize={48} />
      </button>
    </div>
  );
};

export default NotFound;
