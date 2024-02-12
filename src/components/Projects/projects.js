// https://weather-app-chi-steel-86.vercel.app/

import React from "react";
import "./next.css";

import { Link } from "react-scroll";

const Projects = () => {
  return (
    <section id="works">
      <div className="interface">
        <h1 className="workstitle">My Projects</h1>
      </div>
      <div className="project">
        <div id="one" className="projects">
          <div className="overlay">
            <h3>Weather app</h3>
            <a
              href="https://weather-app-chi-steel-86.vercel.app/"
              target="blank"
            >
              See Project
            </a>
          </div>
        </div>
        <div id="two" className="projects">
          <div className="overlay">
            <h3>Image Editor</h3>
            <a href="https://img-editor-ruby.vercel.app/" target="blank">
              See Project
            </a>
          </div>
        </div>
        <div id="three" className="projects">
          <div className="overlay">
            <h3>Code And Number Generator</h3>
            <a
              href="https://code-and-number-generator.vercel.app/"
              target="blank"
            >
              See Project
            </a>
          </div>
        </div>
        <div id="four" className="projects">
          <div className="overlay">
            <h1>Furniture Web</h1>
            <a href="https://furniture-website-ten.vercel.app/" target="blank">
              See Project
            </a>
          </div>
        </div>
        <div id="five" className="projects">
          <div className="overlay">
            <h1>LoanMoney Web</h1>
            <a href="https://loan-money.vercel.app/" target="blank">
              See Project
            </a>
          </div>
        </div>
        <div id="six" className="projects">
          <div className="overlay">
            <h1>Dashboard</h1>
            <a
              href="https://mall-dashboard.vercel.app/admin-dashboard/main"
              target="blank"
            >
              See Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
