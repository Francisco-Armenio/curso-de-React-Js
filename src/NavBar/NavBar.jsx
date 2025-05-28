import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="navbar">
      <div className="navbar__left">
        <Link to="/" className="navbar__logo">TiempoLibro</Link>
      </div>

      <div className="navbar__center">
        <nav className="navbar__links">
          <Link to="/categoria/ficcion" className="navbar__link">Ciencia Ficción</Link>
          <Link to="/categoria/romance" className="navbar__link">Romance</Link>
          <Link to="/categoria/fantasia" className="navbar__link">Fantasía</Link>
          <Link to="/categoria/suspenso" className="navbar__link">Suspenso</Link>
        </nav>
      </div>

      <div className="navbar__right">
        <CartWidget />
      </div>
    </header>
  );
};

export default NavBar;
