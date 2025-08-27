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
          <Link to="/">Marco Martinez</Link>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>

      {/* 🔹 Navigation menu */}
      <div className={`navOptions ${menuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="/acerca" onClick={() => setMenuOpen(false)}>
              Acerca de mí
            </Link>
          </li>
          <li>
            <Link to="/servicios" onClick={() => setMenuOpen(false)}>
              Servicios
            </Link>
          </li>
          <li>
            <Link to="/contacto" onClick={() => setMenuOpen(false)}>
              Contáctanos
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
