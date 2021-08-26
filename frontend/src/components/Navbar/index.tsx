import { ReactComponent as Menu } from 'assets/images/Menu hamburguer.svg';
import { Link, NavLink } from 'react-router-dom';
import 'bootstrap/js/src/collapse.js';

import './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
      <div className="container-fluid">
        <Link to="/" className="nav-logo-text">
          <h4>Carros Top</h4>
        </Link>

        <button
          className="custom-toggler navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#dscatalog-navbar"
          aria-controls="dscatalog-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="custom-toggler ">       
            <Menu />       
          </span>
        </button>

        <div className="collapse navbar-collapse" id="dscatalog-navbar">
          <ul className="navbar-nav offset-md-4 main-menu">
            <li>
              <NavLink to="/" activeClassName = "active" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" activeClassName = "active">
                Catálogo
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
