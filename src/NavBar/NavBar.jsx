import CartWidget from "./CartWidget";
import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">Libreria TiempoLibro</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" >Libros de accion</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" >Libros de romance</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link active" aria-current="page" >Libros de fantasia</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" >Libros de suspenso</a>
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
