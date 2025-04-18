// TechCarousel.jsx
import React, { useState } from 'react';
import technologies from './technologies';
import './TechCarousel.css';

const TechCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = technologies.length;
  const itemWidth = 300; // Ancho aproximado por ítem (puedes ajustar este valor)

  // Número de ítems visibles en pantalla
  const visibleItems = 3;

  // Funciones para navegar en el carousel
  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? total - visibleItems : currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(
      currentIndex === total - visibleItems ? 0 : currentIndex + 1
    );
  };

  return (
    <div className="tech-carousel">
      {/* Contenedor visible del carousel */}
      <div className="tech-items-container">
        {/* Contenedor de todos los ítems que se moverá con translateX */}
        <div
          className="tech-items"
          style={{ transform: `translateX(-${currentIndex * itemWidth}px)` }}
        >
          {technologies.map((tech) => (
            <div className="tech-item" key={tech.name}>
              <img src={tech.logoUrl} alt={tech.name} />
              <h3>{tech.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Flechas debajo del carousel */}
      <div className="carousel-arrows">
        <button className="arrow" onClick={handlePrev}>
          &#9664;
        </button>
        <button className="arrow" onClick={handleNext}>
          &#9654;
        </button>
      </div>
    </div>
  );
};

export default TechCarousel;



