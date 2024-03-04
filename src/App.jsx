// App.js
import { ThemeProvider } from "./components/ThemeContext";
import NavBar from "./components/NavBar";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Skills from "./pages/Skills/Skills";
import Contact from "./pages/Contact/Contact";
import Project from "./pages/Project/Project";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <div className="app-background app-container">
        <NavBar />
        <div id="home">
          <Home />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="projects">
          <Project />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
