import React from "react";
import "./Footer.css";
import { FileText, BookOpen, Code, Star, Heart } from "lucide-react";
import curriculumPDF from "../../../public/Curriculum Nathalia Salguero.pdf";


const Footer = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = curriculumPDF;
    link.download = "Curriculum-Nathalia-Salguero.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Columna izquierda */}
          <div className="footer-column">
            <h3>Perfil</h3>
            <ul>
              <li>
                <Star size={18} className="icon" />
                <span
                  onClick={() => scrollToSection("habilidades")}
                  style={{ cursor: "pointer" }}
                >
                  Habilidades
                </span>
              </li>
              <li>
                <Code size={18} className="icon" />
                <span
                  onClick={() => scrollToSection("tecnologias")}
                  style={{ cursor: "pointer" }}
                >
                  Tecnologías
                </span>
              </li>
            </ul>
          </div>

          {/* Columna central */}
          <div className="footer-column">
            <div className="footer-title">
              <h1>Nathalia Salguero</h1>
            </div>
          </div>

          {/* Enlaces horizontales */}
          <div className="enlaces-horizontales">
            <h3>Enlaces</h3>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/natalia-salguero-b940a529a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-link"
                >
                  <Star size={18} className="icon" />
                  <span>LinkedIn</span>
                </a>
              </li>

              <li
                className="tooltip-container"
                onClick={handleDownloadCV}
                style={{ cursor: "pointer" }}
              >
                <FileText size={18} className="icon" />
                <span>Curriculum</span>
                <span className="tooltip">Descargar</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Copyright */}
        <div className="footer-copyright">
          <div className="copyright-year-container">
            <span>© {new Date().getFullYear()}</span>
            <div className="copyright-container">
              <p>Hecho con</p>
              <Heart size={16} className="heart-icon" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
