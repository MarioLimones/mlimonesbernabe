import React from 'react';
import profilePhoto from './assets/img.jpeg'; // Asegúrate de que la ruta sea correcta
import AnimatedText from './AnimatedText';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      {/* Imagen a la izquierda */}
      <img
        src={profilePhoto}
        alt="Foto de perfil"
        className="hero__image"
      />

      {/* Contenido de texto a la derecha */}
      <div className="hero__content">
        <h1>Mario Limones Bernabé</h1>
        <h2>
          Estudiante || Desarrollador de aplicaciones <AnimatedText texts={['Multiplataforma', 'Web']} />
        </h2>
        <p>
          Como estudiante en desarrollo, tengo una auténtica pasión por la programación y actualmente me estoy formando en <a className="core" href="https://corenetworkssevilla.es">Core Networks</a>. 
          Mi sólida formación técnica y mi dedicación me impulsan a buscar constantemente nuevos retos y oportunidades para crecer profesionalmente.
        </p>
      </div>
    </section>
  );
}





