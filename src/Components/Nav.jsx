import "./Nav.css"
import { useState } from "react";

function Nav()  {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="nav">
      <div className="logoContainer">
        <a>Marco Martinez</a>
      </div>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <div className={`navOptions ${menuOpen ? "active" : ""}`}>
        <ul>
          <li>Acerca de mi</li>
          <li>Servicios</li>
          <li>Contáctanos</li>
        </ul>
      </div>
    </div>
  );
}
  
export default Nav
  