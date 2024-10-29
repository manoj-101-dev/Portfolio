/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import linkdin from "../../logos/linkdin.png";
import github from "../../logos/github.png";
import Manoj from "../../logos/Manoj.pdf";
import pic from "../../logos/pic.jpg";
import "./Home.css";
import { Typography } from "@mui/material";
import { Button } from "react-scroll";

const Home = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const phrases = [
    "Web Developer",
    "MERN Stack Developer",
    "Full Stack Developer",
  ];
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1500,
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let timeout;
    let currentText = "";
    let targetText = phrases[phraseIndex];

    for (let i = 0; i <= targetText.length; i++) {
      timeout = setTimeout(() => {
        currentText = targetText.slice(0, i);
        setDisplayText(currentText);
      }, 200 * i);
    }

    return () => clearTimeout(timeout);
  }, [phraseIndex]);

  useEffect(() => {
    AOS.refresh();
  }, [phraseIndex]);

  const openPdf = () => {
    window.open(Manoj, "_blank");
  };

  return (
    <div className="home-container">
      <div className="content">
        <h1 className="text-line" data-aos="fade-right">
          Hello,
        </h1>
        <h1
          className="text-line title1"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          It's{" "}
          <motion.span
            className="gradient-text"
            initial={{ x: -20 }}
            animate={{
              x: 0,
              transition: {
                duration: 1,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 0.1,
              },
            }}
          >
            {["M", "a", "n", "o", "j"].map((letter, index) => (
              <motion.span
                key={index}
                style={{
                  display: "inline-block",
                  marginRight: index < 4 ? "0.2em" : 0,
                  color: "blue",
                }}
                animate={{
                  y: [0, -5, 0],
                  transition: {
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "loop",
                    delay: index * 0.1,
                  },
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.span>
        </h1>
        <motion.h2 data-aos="fade-right" data-aos-delay="400">
          And I'm into{" "}
          <motion.span
            className="web-developer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            {displayText}
          </motion.span>
        </motion.h2>
        <Typography>
          <p
            className="text-line description"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            Driven by curiosity, I strive to craft intuitive web applications
            that not only solve problems but also inspire users to explore new
            possibilities in the digital realm.
          </p>
        </Typography>

        <div
          className="more-about-container"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <Button
            variant="primary"
            onClick={openPdf}
            className="more-about-me-button"
          >
            More About Me
          </Button>

          {/* Icons Container */}
          <div className="icons-container">
            <a
              href="https://www.linkedin.com/in/manojk9545"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              <img
                src={linkdin}
                alt="LinkedIn"
                className="icon linkedin-icon"
              />
            </a>
            <a
              href="https://github.com/manoj-101-dev"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay="1200"
            >
              <img src={github} alt="GitHub" className="icon github-icon" />
            </a>
          </div>
        </div>
        <div className="image-container">
          <img
            src={pic}
            alt="Profile"
            data-aos="fade-down"
            className="profile-pic"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
