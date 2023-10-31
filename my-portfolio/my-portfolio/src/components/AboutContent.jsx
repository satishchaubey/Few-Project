import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import AboutImg from '../assets/react1.jpg'
import AboutTwo from '../assets/react2.webp'

import React from "react";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I ?</h1>
        <p>I am a Mern Stack Developer.</p>
        <Link to="/contact"><button className="btn">Contact</button></Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={AboutImg} alt="AboutImg" className="img"/>
          </div>
          <div className="img-stack bottom">
            <img src={AboutTwo} alt="AboutImg" className="img"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
