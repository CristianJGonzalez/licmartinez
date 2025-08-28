import { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="nav">
      {/* 🔹 Logo + Toggle button */}
      <div className="nav-top">
        <div className="logoContainer">
          <Link to="/">
            <img
              src="../public/images/Lic.Martinez-Logo-Website.png"
              alt="Lic.MarcoLogo"
            />
          </Link>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>

      <div className="nav-flags">
        <img
          src="../public/images/elsalvador.png"
          alt="elsalvador-Lic.MarcoMartinez-servicios"
        />

        <img
          src="../public/images/estadosunidos.png"
          alt="estadosunidos-Lic.MarcoMartinez-servicios"
        />
      </div>

      {/* 🔹 Navigation menu */}
      <div className={`navOptions ${menuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="/acerca">Acerca de mí</Link>
          </li>
          <li>
            <Link to="/servicios">Servicios</Link>
          </li>
          <li>
            <Link to="/contacto">Contáctanos</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
