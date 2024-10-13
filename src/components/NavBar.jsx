// NavBar.js
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import profile from "../logos/profile.png";
import { useTheme } from "./ThemeContext";
import sun from "../logos/sun.png";
import bluemoon from "../logos/bluemoon.png";

import "../App.css";

function NavBar() {
  const [activeLink, setActiveLink] = useState("");
  const { toggleTheme, isDarkMode } = useTheme();
  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  const navLinks = [
    { label: "Home", sectionId: "home" },
    { label: "Skills", sectionId: "skills" },
    { label: "Projects", sectionId: "projects" },
    { label: "Education & experience", sectionId: "about" },
    { label: "Contact", sectionId: "contact" },
  ];

  const handleClick = () => {
    toggleTheme();
  };

  return (
    <Navbar expand="lg" className="navbar">
      <Navbar.Brand href="#home">
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar alt="Cindy Baker" src={profile} />
          <h4 className="username">Manoj K</h4>
        </Stack>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="nav-links">
          {navLinks.map((link, index) => (
            <ScrollLink
              key={index}
              to={link.sectionId}
              spy={true}
              smooth={true}
              offset={-70}
              duration={0}
              className={`nav-link ${
                activeLink === link.sectionId ? "active" : ""
              }`}
              onClick={() => handleSetActive(link.sectionId)}
            >
              {link.label}
            </ScrollLink>
          ))}
        </Nav>
        <button
          className="theme ml-auto"
          onClick={handleClick}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0",
          }}
        >
          {isDarkMode ? (
            <img src={sun} alt="Light Mode" style={{ width: "30px" }} />
          ) : (
            <img src={bluemoon} alt="Dark Mode" style={{ width: "30px" }} />
          )}
        </button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
