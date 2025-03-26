/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import { Typography, Zoom, Slide } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
    AOS.refresh(); // Refresh AOS after initializing
  }, []);

  return (
    <div id="about" className="about-section">
      <div className="about-content">
        <Typography variant="h1" component="h1" gutterBottom data-aos="fade-up">
          Professional Journey: Education & Experience
        </Typography>
        <Typography variant="body1" paragraph data-aos="fade-up">
          I am Manoj, a dedicated and forward-thinking professional, deeply
          passionate about technology and committed to continuous learning and
          growth in the dynamic field of Web Development.
        </Typography>
        {/* Education Section */}
        <Zoom in={true} timeout={1000} data-aos="fade-up">
          <Typography variant="h4" gutterBottom className="section-title">
            <SchoolIcon
              className="symbol"
              style={{ fontSize: "3rem", color: "#3498db" }}
            />{" "}
            Certification
          </Typography>
        </Zoom>
        <Slide in={true} direction="up" timeout={1600} data-aos="fade-up">
          <div className="content-item">
            <Typography variant="h4" gutterBottom data-aos="fade-up">
              GUVI - Full Stack Developer Course
            </Typography>
            <Typography variant="body2" paragraph data-aos="fade-up">
              Successfully completed the Full Stack Developer course from GUVI,
              covering HTML, CSS, React.js, Node.js, databases, and
              authentication. Developed diverse projects showcasing practical
              skills.
            </Typography>
          </div>
        </Slide>
        <Typography variant="h4" gutterBottom className="section-title">
          <SchoolIcon
            className="symbol"
            style={{ fontSize: "3rem", color: "#3498db" }}
          />{" "}
          Education
        </Typography>

        <Slide in={true} direction="up" timeout={1200} data-aos="fade-up">
          <div className="content-item">
            <Typography variant="h4" gutterBottom data-aos="fade-up">
              Bachelor's Degree
            </Typography>
            <Typography variant="body2" paragraph data-aos="fade-up">
              Graduated with a Bachelor of Computer Applications in 2023 from
              M.G.R College, Hosur.
            </Typography>
          </div>
        </Slide>
        <Slide in={true} direction="up" timeout={1400} data-aos="fade-up">
          <div className="content-item">
            <Typography variant="h4" gutterBottom data-aos="fade-up">
              Higher Secondary Education
            </Typography>
            <Typography variant="body2" paragraph data-aos="fade-up">
              Completed Higher Secondary education in 2020 at Pedda
              Belagondapally, Govt Hr. Sec, School.
            </Typography>
          </div>
        </Slide>

        {/* Work Experience Section */}
        <Zoom in={true} timeout={1800} data-aos="fade-up">
          <Typography variant="h4" gutterBottom className="section-title">
            <WorkIcon
              className="symbol"
              style={{ fontSize: "3rem", color: "#e74c3c" }}
            />{" "}
            Work Experience
          </Typography>
        </Zoom>
        <Slide in={true} direction="up" timeout={2000} data-aos="fade-up">
          <div className="content-item">
            <Typography variant="h4" gutterBottom data-aos="fade-up">
              Frontend Developer Intern – Parkqwik, Chennai
            </Typography>
            <Typography variant="body1" gutterBottom data-aos="fade-up">
              February 19, 2025 – Present
            </Typography>
            <Typography variant="body2" paragraph data-aos="fade-up">
              Learning React Native and implementing assigned tasks in mobile
              app development. Assisting with UI implementation and basic
              feature enhancements under team guidance.
            </Typography>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default About;
