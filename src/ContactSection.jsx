// ContactSection.jsx
import React, { useRef } from 'react';
import './ContactSection.css';

const FORM_ID = "xgvajvpz";

const ContactSection = () => {
  const subjectRef = useRef(null);

  const handleSubjectInput = () => {
    const ta = subjectRef.current;
    ta.style.height = 'auto';
    ta.style.height = ta.scrollHeight + 'px';
  };

  return (
    <section id="contacto" className="section contacto">
      <h2>Contacto</h2>
      <form
        className="contact-form"
        action={`https://formspree.io/f/${FORM_ID}`}
        method="POST"
      >
        <label htmlFor="name">Nombre</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Tu nombre"
          required
        />

        <label htmlFor="email">Correo electrónico</label>
        <input
          id="email"
          type="email"
          name="_replyto"
          placeholder="tu@correo.com"
          required
        />

        <label htmlFor="subject">Asunto</label>
        <textarea
          id="subject"
          name="subject"
          placeholder="Escribe aquí el asunto"
          required
          ref={subjectRef}
          onInput={handleSubjectInput}
        />

        {/* Fija el asunto del email que recibes */}
        <input
          type="hidden"
          name="_subject"
          value="Nuevo mensaje desde mi portafolio"
        />

        <button type="submit" className="contact-button">
          Enviar mensaje
        </button>
      </form>
    </section>
  );
};

export default ContactSection;

