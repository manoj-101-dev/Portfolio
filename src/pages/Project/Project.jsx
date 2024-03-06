import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import ZenClass from "../../logos/ZenClass.png";
import health from "../../logos/health.png";
import shopping from "../../logos/shopping.png";
import { Typography } from "@mui/material";
import "./Project.css";

const Project = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
    AOS.refresh(); // Refresh AOS after initializing
  }, []);

  const projects = [
    {
      title: "Zen Class",
      description:
        "A React web app for streamlined education management with attendance and task management, leave applications, and queries.",
      backendURL: "https://github.com/manoj-101-dev/Zen_Class_Backend.git",
      frontendURL: "https://github.com/manoj-101-dev/Zen_Class.git",
      deployedURL: "https://zen-class-six.vercel.app/",
      imageUrl: ZenClass,
    },
    {
      title: "Health-Record-Manager ",
      description:
        "The Health Record Manager is a web app for managing health records, with features for creating, editing, and viewing records, plus secure user authentication.",
      backendURL:
        "https://github.com/manoj-101-dev/Health-Record-Manager-Backend.git",
      frontendURL: "https://github.com/manoj-101-dev/Health-Record-Manager.git",
      deployedURL: "https://health-record-manager.vercel.app/",
      imageUrl: health,
    },
    {
      title: "Shopping-cart",
      description:
        "This React application is a simple shopping cart that displays a list of products and allows users to manage their cart items.",
      backendURL: "https://github.com/manoj-101-dev/Shopping-cart.git",
      frontendURL: "https://github.com/manoj-101-dev/Shopping-cart.git",
      deployedURL: "https://shopping-cart-xi-azure.vercel.app/",
      imageUrl: shopping,
    },
  ];

  return (
    <div className="project">
      <Typography
        className="project-heading"
        variant="h3"
        component="h1"
        gutterBottom
        data-aos="fade-up"
      >
        Projects That I Made
      </Typography>

      <div className="project-container">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            <img
              src={project.imageUrl}
              alt="Project"
              className="project-image"
            />
            <h3 className="project-title">{project.title}</h3>
            <h6 className="project-description">{project.description}</h6>
            <div className="button-container">
              <a
                href={project.backendURL}
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                Backend
              </a>
              <a
                href={project.frontendURL}
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                Frontend
              </a>
              <a
                href={project.deployedURL}
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                Live Site
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
