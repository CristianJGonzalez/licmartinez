import { useState } from "react";
import "./Nav.css";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="nav">
      {/* 🔹 Contenedor del logo + botón toggle */}
      <div className="nav-top">
        <div className="logoContainer">
          <a href="#">Marco Martinez</a>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          ☰
        </button>
      </div>

      {/* 🔹 Menú de navegación */}
      <div className={`navOptions ${menuOpen ? "active" : ""}`}>
        <ul>
          <li>Acerca de mí</li>
          <li>Servicios</li>
          <li>Contáctanos</li>
        </ul>
      </div>
    </div>
  );
}

export default NavBackup;
