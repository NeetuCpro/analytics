import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <div className="hero-container">
        <div className="hero-content">
          <h1>DRIVEN BY INSIGHTS</h1>
          <p>
            ELEVATE YOUR BUSINESS WITH TAILORED B2B <br /> CONSULTANCY SOLUTIONS
          </p>
          <button
            className="hero-button"
            onClick={() => navigate("/solutions")}
          >
            Explore Our Solutions
          </button>
        </div>       
      </div>

      {/* New Section for the Paragraph */}
      <div className="paragraph-section">
        <p className="paragraph-section-1"> 
          Our platform provides in-depth insights, helping businesses optimize
          strategies and drive success. With data-driven solutions and expert
          consultancy, we empower enterprises to make informed decisions and
          unlock new opportunities.
          Access and analyze reports effortlessly to make data-driven decisions.
           Customize language preferences for a more personalized and accessible interface. 
           Stay up to date with the latest footwear trends, explore various collections, 
           and manage inventory efficiently. The dashboard provides a comprehensive overview of key metrics, 
           allowing real-time monitoring and informed decision-making. A seamless and organized experience 
           ensures better navigation, helping users stay efficient and in control.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;

