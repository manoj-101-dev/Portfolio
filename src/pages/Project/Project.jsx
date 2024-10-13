import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import ZenClass from "../../logos/ZenClass.png";
import health from "../../logos/health.png";
import shopping from "../../logos/shopping.png";
import movie from "../../logos/movie.png";
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
      title: "Movie App",
      description:
        "This  Movie Booking Application, built using React and React Bootstrap. It provides a user-friendly interface for users to register, log in, view movies, and make bookings.",
      backendURL: "https://github.com/manoj-101-dev/MovieApp-Server.git",
      frontendURL: "https://github.com/manoj-101-dev/MovieApp.git",
      deployedURL: "https://movie-app-eta-murex.vercel.app/",
      imageUrl: movie,
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
        "Shopping Cart is a React-based shopping app where users can browse products, add items to their cart, and book with delivery details.",
      backendURL: "https://github.com/manoj-101-dev/Ecommerce-Backend.git",
      frontendURL: "https://github.com/manoj-101-dev/Ecommerce.git",
      deployedURL: "https://ecommerce-sable-rho-90.vercel.app/",
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
