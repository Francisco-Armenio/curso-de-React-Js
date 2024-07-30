import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";


const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">Libreria TiempoLibro</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/categoria/ficcion" className="nav-link active" aria-current="page" >Ciencia ficción</Link>
              </li>
              <li className="nav-item">
                <Link to="/categoria/romance" className="nav-link active" aria-current="page" >Romance</Link>
              </li>
              <li className="nav-item dropdown">
                <Link to="/categoria/fantasia" className="nav-link active" aria-current="page" >Fantasia</Link>
              </li>
              <li className="nav-item">
                <Link to="/categoria/suspenso" className="nav-link active" aria-current="page" >Suspenso</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <CartWidget />
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
