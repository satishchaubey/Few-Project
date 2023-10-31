import "./heroImgStyles.css";
import React from "react";
import IntoImg from '../assets/intro-bg.jpg'
import { Link } from "react-router-dom";



const HeroImg = () => {
  return <div className="hero">
    <div className="mask">
      <img src={IntoImg} alt="IntoImg" className="intro-img" />
    </div>
    <div className="content">
      <p>Hi I'm A FREELANCER.</p>
      <h1>MERN STACK DEVELOPER</h1>
      <div>
        <Link to="/project" className="btn">PROJECTS</Link>
        <Link to="/contact" className="btn btn-light">CONTACT</Link>
      </div>
    </div>
  </div>;
};

export default HeroImg;
