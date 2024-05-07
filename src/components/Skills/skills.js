import React from "react";
import "./skills.css";

// framer-motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../variant";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skilltitle">What I Do</span>
      <span className="skilldesc">
        I am skilled front-end developer, i need experience and please hire me
      </span>
      <div className="skillbars">
        <div className="skillbar">
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="barcon"
            id="oneskill"
          ></motion.div>
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="skillbartext"
          >
            <h2>App Developer</h2>
            <p>Make App with Python, React and C#</p>
          </motion.div>
        </div>

        <div className="skillbar">
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="skillbartext"
          >
            <h2>Web Developer</h2>
            <p>Make Beautiful Website</p>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="barcon"
            id="twoskill"
          ></motion.div>
        </div>

        <div className="skillbar">
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="barcon"
            id="threeskill"
          ></motion.div>
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="skillbartext"
          >
            <h2>Python Developer</h2>
            <p>Make App with Python, Also work with Django</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
