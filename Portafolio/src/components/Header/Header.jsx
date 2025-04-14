import React, { useState, useEffect } from "react";
import "./Header.css";
import { Home, Menu, X } from "lucide-react";
import Contactme from "../../../public/Contactame.pdf";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleDownloadContact = () => {
    const link = document.createElement("a");
    link.href = Contactme;
    link.download = "Contactame.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className={`container_Navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="contenido_Navbar">
        <div className="logo-container">
          <h1 className="logo">Nathalia Salguero</h1>
          <div className="logo-underline"></div>
        </div>

        <div className="mobile-menu-button" onClick={toggleMenu}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>

        <nav className={`nav-links ${menuOpen ? "show" : ""}`}>
          <a href="#" className="nav-item active">
            <Home size={18} />
            <span>Inicio</span>
          </a>

          <a href="#contact" className="nav-item">
            <span onClick={handleDownloadContact}>Contacto</span>
          </a>
        </nav>
      </div>

      {/* Efecto decorativo */}
      <div className="header-decoration">
        <div className="glow-dot"></div>
        <div className="glow-dot"></div>
        <div className="glow-dot"></div>
      </div>
    </div>
  );
};

export default Header;
