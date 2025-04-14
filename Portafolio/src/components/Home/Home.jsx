import React, { useEffect, useState } from "react";
import "./Home.css";
import lado1 from "/src/assets/lado1.jpg";
// import lado2 from "/src/assets/lado2.jpg";

const proyectosData = [
  {
    id: 3,
    titulo: "Software de agendamiento de citas para centro de estética",
    año: "2024",
    img: "/src/assets/portada.jpg",
    descripcion:
      "Desarrollo completo de un sistema de agendamiento de citas para un centro de estética facial. Manejando la lógica de agendamiento, bloqueo de horas, gestión de usuarios y servicios. Además, trabajé en equipo utilizando metodologías ágiles, colaborando con otros desarrolladores para integrar funcionalidades y asegurar la calidad del software.",
    tecnologias: ["React", "Node.js", "Supabase"],
  },
];

const getCurrentGreeting = () => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) {
    return "¡Buenos días! El mejor momento para crear algo asombroso.";
  } else if (hour >= 12 && hour < 18) {
    return "¡Buenas tardes! Espero que estés teniendo un día productivo y brillante.";
  } else if (hour >= 18 && hour < 22) {
    return "¡Buenas noches! Momento perfecto para reflexionar sobre los logros del día.";
  } else {
    return "¡Hola, Madrugad@r! La inspiración a veces llega en horas inesperadas.";
  }
};

const Home = () => {
  return (
    <div className="container">
      <div className="hero-section">
        <div className="intro-container">
          <div className="name-container">
            <h1 className="name-text">Nathalia Salguero</h1>
            <div className="role-text">
              Desarrolladora Web & Diseñadora Gráfica
            </div>
            <div className="saludo_home">
              <p className="greeting-text">{getCurrentGreeting()}</p>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={lado1} alt="Nathalia Salguero foto 1" />
              </div>
              <div className="flip-card-back">
                <img src={lado1} alt="Nathalia Salguero foto 2" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="acercade_home">
        <h1 className="glow-text">Acerca de Mi</h1>
        <p className="about-text">
          Soy una persona adaptable con una gran capacidad para integrarme en
          diversos entornos, siempre aportando lo mejor de mí. Me caracterizo
          por mi facilidad para el trabajo en equipo y por mi entusiasmo por
          aprender y desarrollar nuevas habilidades. Actualmente busco una
          oportunidad laboral que me permita adquirir más experiencia y seguir
          creciendo profesionalmente.
        </p>
      </div>

      <div id="habilidades" className="habilidades">
        <h1>Habilidades</h1>
        <ul>
          <li>Desarrollo de aplicaciones web</li>
          <li>Programación</li>
          <li>
            Diseño de interfaces de usuario (UI) y experiencia de usuario (UX)
          </li>
          <li>Manejo de bases de datos (SQL, Supabase,Msyql)</li>
          <li>Optimización y mejora de rendimiento de software</li>
          <li>Control de versiones (Git, Sourcetree)</li>
          <li>Metodologías ágiles (Scrum)</li>
          <li>Conocimientos en APIs</li>
          <li>
            Habilidad para prototipado y diseño gráfico (Adobe XD, Figma,
            CorelDraw)
          </li>
        </ul>
      </div>

      <div id="tecnologias" className="skills-container">
        <h1 className="skills-title">Tecnologías</h1>
        <div className="skills-grid">
          <div className="skill-card">
            <img src="/src/assets/html.svg" alt="HTML" className="skill-icon" />
            <p className="skill-name">Html</p>
            <div className="skill-glow"></div>
          </div>

          <div className="skill-card">
            <img src="/src/assets/css.svg" alt="CSS" className="skill-icon" />
            <p className="skill-name">Css</p>
            <div className="skill-glow"></div>
          </div>

          <div className="skill-card">
            <img
              src="/src/assets/react.svg"
              alt="React"
              className="skill-icon"
            />
            <p className="skill-name">React</p>
            <div className="skill-glow"></div>
          </div>

          <div className="skill-card">
            <img
              src="/src/assets/javascript.svg"
              alt="Javascript"
              className="skill-icon"
            />
            <p className="skill-name">JavasCript</p>
            <div className="skill-glow"></div>
          </div>

          <div className="skill-card">
            <img
              src="/src/assets/asana.svg"
              alt="Asana"
              className="skill-icon"
            />
            <p className="skill-name">Asana</p>
            <div className="skill-glow"></div>
          </div>

          <div className="skill-card">
            <img
              src="/src/assets/angular.svg"
              alt="Angular"
              className="skill-icon"
            />
            <p className="skill-name">Angular</p>
            <div className="skill-glow"></div>
          </div>

          <div className="skill-card">
            <img
              src="/src/assets/python.svg"
              alt="Python"
              className="skill-icon"
            />
            <p className="skill-name">Python</p>
            <div className="skill-glow"></div>
          </div>

          <div className="skill-card">
            <img
              src="/src/assets/javascript.svg"
              alt="JavaScript"
              className="skill-icon"
            />
            <p className="skill-name">JavaScript</p>
            <div className="skill-glow"></div>
          </div>

          <div className="skill-card">
            <img
              src="/src/assets/nestjs.svg"
              alt="nestjs"
              className="skill-icon"
            />
            <p className="skill-name">Nestjs</p>
            <div className="skill-glow"></div>
          </div>

          <div className="skill-card">
            <img
              src="/src/assets/nodejs.svg"
              alt="nodejs"
              className="skill-icon"
            />
            <p className="skill-name">Nodejs</p>
            <div className="skill-glow"></div>
          </div>

          <div className="skill-card">
            <img
              src="/src/assets/github.svg"
              alt="Git"
              className="skill-icon"
            />
            <p className="skill-name">Git</p>
            <div className="skill-glow"></div>
          </div>
        </div>
      </div>

      <div className="proyectos">
        <h1>Proyectos</h1>
        <div className="proyectos-grid">
          {proyectosData.map((proyecto) => (
            <div className="proyecto-card" key={proyecto.id}>
              <div className="proyecto-imagen">
                <img
                  src={proyecto.img} // Usamos la propiedad img del objeto
                  alt={proyecto.titulo}
                  className="proyecto-img"
                />
                <div className="proyecto-overlay">
                  <span className="proyecto-año">{proyecto.año}</span>
                </div>
              </div>

              <div className="proyecto-content">
                <h2>{proyecto.titulo}</h2>
                <p className="proyecto-descripcion">{proyecto.descripcion}</p>
                <div className="proyecto-tecnologias">
                  {proyecto.tecnologias.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="estudios">
          <h1>Estudios</h1>
          <div className="contenido_estudios">
            <div className="estudio">
              <h2>Técnico en Diseño Gráfico (2020 - 2022)</h2>
              <p>
                Estudios en diseño visual enfocados en herramientas como Adobe
                Photoshop e Illustrator. Formación en fotografía, video,
                publicidad, marketing y diseño UX/UI para aplicaciones
                digitales.
              </p>
            </div>
            <div className="estudio">
              <h2>
                Tecnólogo en Análisis y Desarrollo de Software (2023-2024)
              </h2>
              <p>
                Formación en desarrollo de aplicaciones web y móviles, con
                enfoque en lenguajes como JavaScript, React y Node.js.
                Capacitación en bases de datos como SQL y metodologías ágiles
                como SCRUM.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
