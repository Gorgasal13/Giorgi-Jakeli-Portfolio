import React from "react";

import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";

import "./basicfooter.css";

const BasicFooter = () => {
  return (
    <footer id="footer">
      <div className="con">
        <div className="row">
          <div className="footer-col">
            <h3>About Us</h3>
            <ul>
              <li className="list">
                <a href="#">About us</a>
                <a href="#">Our Services</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Links</h3>
            <ul>
              <li className="navigation">
                <a href="#">Home</a>
                <a href="#">What I Do</a>
                <a href="#">Skills</a>
                <a href="#">Projects</a>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Services</h3>
            <ul>
              <li className="list">
                <a href="#">Web </a>
                <a href="#">Backend </a>
                <a href="#">Fullstuck </a>
                <a href="#">Frontend </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Contact Me</h3>
            <div className="social-links">
              <a
                href="https://www.facebook.com/profile.php?id=100011217527831"
                target="blank"
              >
                <FaFacebook className="iconic" size={25} />
              </a>
              <a href="https://twitter.com/giorgijakeli7" target="blank">
                <AiFillTwitterCircle className="iconinc" size={25} />
              </a>
              <a
                href="https://www.linkedin.com/in/gigi-jakeli-5185a0226/"
                target="blank"
              >
                <AiFillLinkedin className="iconinc" size={25} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer className="lastone">
        Copyright &#169; 2024 Giorgi Jakeli. All right received.
      </footer>
    </footer>
  );
};

export default BasicFooter;
