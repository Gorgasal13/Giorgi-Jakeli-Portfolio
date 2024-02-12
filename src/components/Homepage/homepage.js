import React, { useState, useEffect } from "react";
import "./homepage.css";
import menu from "../../assets/menu.png";
import { Link } from "react-scroll";
import { FaFacebookMessenger, FaGithub, FaLinkedin } from "react-icons/fa";

import { fadeIn } from "../../variant";
import { ReactTyped } from "react-typed";
//motion
import { motion } from "framer-motion";

const Homepage = () => {
  const [scrollValue, setScrollValue] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollValue(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // const [showMenu, setShowMenu] = useState(false);
  // const buttonClassName =
  //   "btns-animate-" + Math.random().toString(36).substring(7);
  return (
    <header>
      <nav id="navbar" className={scrollValue > 150 ? "bgcolor" : ""}>
        {/* <img src={logo} alt="logo" className="logo" /> */}
        <h1 className="logo">Giorgi</h1>
        <div className="desktopmenu">
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="desktopmenulistitem"
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="desktopmenulistitem"
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="desktopmenulistitem"
          >
            Skills
          </Link>
          <Link
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="desktopmenulistitem"
          >
            Projects
          </Link>
          <Link
            activeClass="active"
            to="contactpage"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="desktopmenulistitem"
          >
            Contact
          </Link>
        </div>
        <button
          className="desktopmenubutton"
          onClick={() => {
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          {/* <img src={contact} alt="" className="desktopmenuimg" />*/} Contact
          Me
        </button>
        {/* for phone */}
        <img
          src={menu}
          alt="mobmenu"
          className="mobmenu"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        />
        <div
          className="navmenu"
          style={{ display: showMenu ? "flex" : "none" }}
        >
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="listitem"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="listitem"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="listitem"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            Projects
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="listitem"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            Skills
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="listitem"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            NewSkills
          </Link>
        </div>
        {/* for phone */}
      </nav>

      <section id="intro">
        <div className="introcontent">
          <motion.span
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="hello"
          >
            Hello,
          </motion.span>
          <motion.span
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="introtext"
          >
            I'm <span className="introname">Giorgi</span>
            <br />
            <ReactTyped
              strings={["Python Developer", "Web Developer"]}
              typeSpeed={70}
              backSpeed={70}
              loop
            />
          </motion.span>
          <div className="textcontent">
            <motion.p
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="intropara"
            >
              Junior front-end developer proficient in React. Devoted Python
              programmer, focused on delivering high-quality code and
              contributing to user-friendly web experiences within dynamic
              teams.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="box"
          >
            <motion.button
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="custom-button"
            >
              <span>Download Sv</span>
            </motion.button>
            <div className="icons">
              <div className="icon">
                <a
                  href="https://www.facebook.com/profile.php?id=100011217527831"
                  target="blank"
                >
                  <FaFacebookMessenger className="ico" />
                </a>
              </div>
              <div className="icon">
                <a href="https://github.com/Gorgasal13" target="blank">
                  <FaGithub className="ico" />
                </a>
              </div>
              <div className="icon">
                <a
                  href="https://www.linkedin.com/in/gigi-jakeli-5185a0226/"
                  target="blank"
                >
                  <FaLinkedin className="ico" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </header>
  );
};

export default Homepage;
