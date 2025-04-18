import React, { useState, useEffect } from 'react';

export default function AnimatedText({ texts, typingSpeed = 100, deletingSpeed = 50, pauseTime = 1500 }) {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer = null;
    const currentText = texts[textIndex];

    if (!isDeleting && displayText !== currentText) {
      // Escribe la siguiente letra
      timer = setTimeout(() => {
        setDisplayText(currentText.substring(0, displayText.length + 1));
      }, typingSpeed);
    } else if (isDeleting && displayText !== '') {
      // Borra la última letra
      timer = setTimeout(() => {
        setDisplayText(currentText.substring(0, displayText.length - 1));
      }, deletingSpeed);
    } else if (!isDeleting && displayText === currentText) {
      // Terminado de escribir, espera antes de empezar a borrar
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting && displayText === '') {
      // Terminó de borrar, pasa al siguiente texto y vuelve a escribir
      setIsDeleting(false);
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, texts, textIndex, typingSpeed, deletingSpeed, pauseTime]);

  return <span>{displayText}</span>;
}

