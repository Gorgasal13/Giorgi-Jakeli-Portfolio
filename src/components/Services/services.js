import "./services.css";
import { fadeIn } from "../../variant";

//motion
import { motion } from "framer-motion";

function Services() {
  return (
    <section className="experiencesection" id="about">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="container"
      >
        <div className="sectiontitle">
          <p>Why Choose Me</p>
          <h2>My Skills</h2>
        </div>
        <div className="experienceitems">
          <div className="experienceitem">
            <div className="experienceinfo">
              <p>React</p>
              <p>85%</p>
            </div>
            <div className="progressline" data-percent="85%">
              <span style={{ width: "85%" }}></span>
            </div>
          </div>

          <div className="experienceitem">
            <div className="experienceinfo">
              <p>Javascript</p>
              <p>90%</p>
            </div>
            <div className="progressline" data-percent="90%">
              <span style={{ width: "90%" }}></span>
            </div>
          </div>

          <div className="experienceitem">
            <div className="experienceinfo">
              <p>Python</p>
              <p>70%</p>
            </div>
            <div className="progressline" data-percent="70%">
              <span style={{ width: "70%" }}></span>
            </div>
          </div>

          <div className="experienceitem">
            <div className="experienceinfo">
              <p>HTML,CSS</p>
              <p>90%</p>
            </div>
            <div className="progressline" data-percent="90%">
              <span style={{ width: "90%" }}></span>
            </div>
          </div>

          <div className="experienceitem">
            <div className="experienceinfo">
              <p>Bootstrap</p>
              <p>70%</p>
            </div>
            <div className="progressline" data-percent="70%">
              <span style={{ width: "70%" }}></span>
            </div>
          </div>

          <div className="experienceitem">
            <div className="experienceinfo">
              <p>Django</p>
              <p>80%</p>
            </div>
            <div className="progressline" data-percent="80%">
              <span style={{ width: "80%" }}></span>
            </div>
          </div>

          <div className="experienceitem">
            <div className="experienceinfo">
              <p>Next.js</p>
              <p>80%</p>
            </div>
            <div className="progressline" data-percent="80%">
              <span style={{ width: "80%" }}></span>
            </div>
          </div>

          <div className="experienceitem">
            <div className="experienceinfo">
              <p>Web Design</p>
              <p>70%</p>
            </div>
            <div className="progressline" data-percent="70%">
              <span style={{ width: "70%" }}></span>
            </div>
          </div>

          <div className="experienceitem">
            <div className="experienceinfo">
              <p>Wordpress</p>
              <p>65%</p>
            </div>
            <div className="progressline" data-percent="65%">
              <span style={{ width: "65%" }}></span>
            </div>
          </div>

          <div className="experienceitem">
            <div className="experienceinfo">
              <p>TailWind</p>
              <p>80%</p>
            </div>
            <div className="progressline" data-percent="80%">
              <span style={{ width: "80%" }}></span>
            </div>
          </div>

          <div className="experienceitem">
            <div className="experienceinfo">
              <p>C#</p>
              <p>85%</p>
            </div>
            <div className="progressline" data-percent="85%">
              <span style={{ width: "85%" }}></span>
            </div>
          </div>

          <div className="experienceitem">
            <div className="experienceinfo">
              <p>SQL,mySQL</p>
              <p>70%</p>
            </div>
            <div className="progressline" data-percent="85%">
              <span style={{ width: "70%" }}></span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Services;
