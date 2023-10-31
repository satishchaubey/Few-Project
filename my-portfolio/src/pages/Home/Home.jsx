import React from "react";
import "./home.css";
import Profile from "../../assests/satish1.png";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <section className="home section grid d-flex flex-wrap">
        
        <img src={Profile} alt="" className="home__img" />

        <div className="home__content">
          <div className="home__data">
            <h1 className="home__title">
              <span>I'm Satish Chuabey.</span> <p className="mern">MERN STACK</p>
            </h1>
            <p className="home__description">
              Design and build applications/systems based on wireframes and
              product requirements documents. Work on back-end & front-end
              development of core scripts using NodeJS/ MongoDB/React.
              js/Express /Redux. Unit test code for robustness, including edge
              cases, usability and general reliability.
            </p>
            <Link to="/about" className="button">
              Work In Progress{" "}
              <span className="button_icon">
                {" "}
                <FaArrowRight />
              </span>
            </Link>
          </div>
        </div>

        <div className="color__block"></div>
      </section>
    </>
  );
};

export default Home;
