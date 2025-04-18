import portfolioImg from './assets/portfolio.png';
import tictactoeImg from './assets/tictactoe.png';
import tictactoedarkImg from './assets/tictactoe.dark.png';
import portfoliodarkImg from './assets/portfolio.dark.png';
import './ProjectsSection.css';

const projects = [
    {
      id: 1,
      title: "Antiguo Portafolio",
      description: "Como mi primer proyecto importante, creé un portafolio personal que me ayudó a consolidar los conceptos clave del desarrollo web. Utilicé HTML para estructurar el contenido de manera semántica, CSS para diseñar layouts atractivos y responsivos, y JavaScript para añadir interactividad a elementos esenciales. A través de esta experiencia, aprendí a construir páginas limpias y accesibles, a optimizar estilos separando las capas y a manejar eventos y dinámicas básicas del DOM.",
      lightImageUrl: portfolioImg ,   
      darkImageUrl: portfoliodarkImg,
      link: "https://mariolimones.github.io/mlimones/",
    },
    {
      id: 2,
      title: "Tres en Raya (React)",
      description: "Como parte de un proyecto interactivo, me dediqué a diseñar e implementar un juego de Tres en Raya utilizando React y Hooks para gestionar el estado de la aplicación. Para lograrlo, organicé la interfaz en componentes reutilizables que representan el tablero, las casillas y el historial de jugadas. Gracias a useState y useEffect, pude actualizar el estado del juego de manera dinámica y detectar rápidamente las condiciones de victoria o empate.",
      lightImageUrl: tictactoeImg,        // Colócala también en /public/images
      darkImageUrl: tictactoedarkImg,
      link: "https://github.com/MarioLimones/aprendiendo-react/tree/main/02-tres-en-raya",
    },
  ];
  
  export default projects;
