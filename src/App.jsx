import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";
import profileImg from "./assets/profile.jpg";
import "./App.css";

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">My Portfolio</div>
        <ul className="nav-links">
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <button className="hire-btn">Hire Me</button>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-info">
          <p className="greeting">Hi, I'm</p>
          <h1 className="name">Kanesuan CHOMKING</h1>
          <h3 className="role">
            I'm a{" "}
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "Computer Science Student",
                2000,
                "Frontend Developer",
                2000,
              ]}
              repeat={Infinity}
            />
          </h3>
          <p className="bio">
            Passionate about web development and building interactive
            applications using modern tech stacks like React, Vite, and Bun.
          </p>
          <div className="socials">
            <a
              href="https://github.com/Kanesuan05"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
          </div>
        </div>

        <Tilt
          className="hero-img-wrapper"
          tiltMaxAngleX={15}
          tiltMaxAngleY={15}
        >
          <img
            src={profileImg}
            alt="Kanesuan Profile"
            className="profile-img"
          />
        </Tilt>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <h2>My Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <FaReact className="icon react" />
            <p>React</p>
          </div>
          <div className="skill-card">
            <FaJs className="icon js" />
            <p>JavaScript</p>
          </div>
          <div className="skill-card">
            <FaHtml5 className="icon html" />
            <p>HTML5</p>
          </div>
          <div className="skill-card">
            <FaCss3Alt className="icon css" />
            <p>CSS3</p>
          </div>
          <div className="skill-card">
            <FaGitAlt className="icon git" />
            <p>Git</p>
          </div>
          <div className="skill-card">
            <FaNodeJs className="icon node" />
            <p>Node.js / Bun</p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio-section">
        <h2>My Portfolio</h2>
        <div className="portfolio-grid">
          <div className="portfolio-card">
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500"
              alt="Portfolio"
            />
            <div className="card-content">
              <h3>Portfolio Website</h3>
              <p>
                Personal portfolio website built with React, Vite, and GitHub
                Pages.
              </p>
              <button className="view-btn">View Project</button>
            </div>
          </div>
          <div className="portfolio-card">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500"
              alt="Web Lab"
            />
            <div className="card-content">
              <h3>Web Development LAB</h3>
              <p>Collection of web development projects and assignments.</p>
              <button className="view-btn">View Project</button>
            </div>
          </div>
          <div className="portfolio-card">
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500"
              alt="React Components"
            />
            <div className="card-content">
              <h3>React Components</h3>
              <p>
                Interactive UI components developed using modern CSS modules.
              </p>
              <button className="view-btn">View Project</button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stat-item">
          <h3>10+</h3>
          <p>Projects Completed</p>
        </div>
        <div className="stat-item">
          <h3>5+</h3>
          <p>Satisfied Clients</p>
        </div>
        <div className="stat-item">
          <h3>2+</h3>
          <p>Years Experience</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Kanesuan CHOMKING. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
