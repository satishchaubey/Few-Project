import "./FooterStyles.css";
import {
  FaFacebook,
  FaGithub,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <h4>
              <FaHome
                style={{ color: "white", marginRight: "2rem",marginTop:"0.3rem" }}
                size={20}
              />
              <div>
                <p>Kasya Kushinagar.</p>
                <p>India</p>
              </div>
            </h4>
          </div>
          <div className="phone">
            <FaPhone
              style={{ color: "white", marginRight: "2rem",marginTop:"0.3rem"  }}
              size={20}
            />
            <h4>8299805407</h4>
          </div>
          <div className="email">
            <FaMailBulk
              style={{ color: "white", marginRight: "2rem",marginTop:"0.3rem"  }}
              size={20}
            />
            <h4>satishchaubey02@gmail.com</h4>
          </div>
        </div>
        <div className="right">
          <h4>About Me</h4>
          <p>I'm React Js developer.And I built many Projects.</p>
          <div className="social">
            <FaFacebook
              style={{ color: "white", marginRight: "1rem" }}
              size={30}
            />
            <FaTwitter
              style={{ color: "white", marginRight: "1rem" }}
              size={30}
            />
            <FaLinkedin
              style={{ color: "white", marginRight: "1rem" }}
              size={30}
            />
            <FaGithub
              style={{ color: "white", marginRight: "1rem" }}
              size={30}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
