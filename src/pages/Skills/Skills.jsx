import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import htmlLogo from "../../logos/html.png";
import cssLogo from "../../logos/css.png";
import jsLogo from "../../logos/js.png";
import reactLogo from "../../logos/react.png";
import nodejsLogo from "../../logos/nodejs.png";
import mongoDBLogo from "../../logos/mongoDB.png";
import bootstrapLogo from "../../logos/bootstrap.png";
import "./Skills.css";
import { Typography } from "@mui/material";

const Skills = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const skills = [
    { category: "Frontend", name: "HTML5", logo: htmlLogo },
    { category: "Frontend", name: "CSS3", logo: cssLogo },
    { category: "Frontend", name: "JavaScript", logo: jsLogo },
    { category: "Frontend", name: "React", logo: reactLogo },
    { category: "Frontend", name: "Bootstrap", logo: bootstrapLogo },
    { category: "Backend & Database", name: "Node.js", logo: nodejsLogo },
    { category: "Backend & Database", name: "MongoDB", logo: mongoDBLogo },
    // Add more skills or categories as needed
  ];

  return (
    <div className="skills-container" data-aos="fade">
      <Typography
        className="title"
        variant="h3"
        component="h1"
        gutterBottom
        data-aos="fade-up"
      >
        Skills & Technologies I Know
      </Typography>

      <div className="category-container">
        <h3 className="category-title">Frontend</h3>
        <div className="logos-container">
          {skills
            .filter((skill) => skill.category === "Frontend")
            .map((skill, index) => (
              <div className="logo-container" key={index} data-aos="fade-up">
                <img
                  className="logo"
                  src={skill.logo}
                  alt={`${skill.name} Logo`}
                />
                <p className="skill-name">{skill.name}</p>
              </div>
            ))}
        </div>
      </div>
      <div className="category-container">
        <h3 className="category-title">Backend & Database</h3>
        <div className="logos-container">
          {skills
            .filter((skill) => skill.category === "Backend & Database")
            .map((skill, index) => (
              <div className="logo-container" key={index} data-aos="fade-up">
                <img
                  className="logo"
                  src={skill.logo}
                  alt={`${skill.name} Logo`}
                />
                <p className="skill-name">{skill.name}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
