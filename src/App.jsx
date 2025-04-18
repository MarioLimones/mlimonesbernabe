// App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';
import Hero from './Hero.jsx';
import TechCarousel from './TechCarousel';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(open => !open);

  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);
  const toggleTheme = () => setDarkMode(dm => !dm);

  return (
    <div className="app-container">
      {/* HEADER */}
      <div className="header">
        <p>mario.limobe@gmail.com</p>
        <button>
          <a href="/cv_MarioLimones.pdf" download="cv_MarioLimones">
            Descargar Curriculum
          </a>
        </button>
        <label className="toggle">
          <input
            id="switch"
            type="checkbox"
            className="input"
            checked={darkMode}
            onChange={toggleTheme}
          />
          <span className="icon icon--moon">🌙</span>
          <span className="icon icon--sun">☀️</span>
        </label>
      </div>

      {/* HAMBURGER MENU */}
      <div className="menu-icon" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* SIDEBAR */}
      <aside className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
        <nav className="nav-menu">
          <ul>
            <li><a href="#inicio" onClick={toggleMenu}>Inicio</a></li>
            <li><a href="#tecnologias" onClick={toggleMenu}>Tecnologías</a></li>
            <li><a href="#proyectos" onClick={toggleMenu}>Proyectos</a></li>
            <li><a href="#contacto" onClick={toggleMenu}>Contacto</a></li>
          </ul>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="main-content">
        <section id="inicio" className="section inicio">
          <div className="inicio-card">
            <Hero />
          </div>
          <div className="social-links-container">
            <div className="social-links">
              <a href="https://github.com/MarioLimones" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/mariolimonesbernabe/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </section>

        <section id="tecnologias" className="section">
          <h2>Tecnologías Conocidas</h2>
          <p>
            A lo largo de mi carrera como desarrollador, he tenido la oportunidad de aprender y 
            aplicar una variedad de tecnologías esenciales. Estas herramientas me han capacitado para diseñar, implementar y mantener soluciones sólidas y escalables. 
            A continuación, te presento una lista de las habilidades 
            técnicas que he dominado y utilizado en proyectos reales.
          </p>
          <TechCarousel />
        </section>

        <section id="proyectos" className="section proyectos">
          <h2>Proyectos Destacados</h2>
          <ProjectsSection darkMode={darkMode} />
        </section>

        <section id="contacto" className="section contacto">
          <ContactSection />
        </section>
      </main>
    </div>
  );
}

export default App;



