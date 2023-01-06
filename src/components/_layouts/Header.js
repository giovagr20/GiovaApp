import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from "../../assets/img/logo.svg"
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-primary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="LogoGiovaApp" width="60" height="60"/>
          </Link>
          <Link to="/" className="navbar-brand">
            <em> GiovaApp </em>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ml-6" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <strong>Choose Language</strong>
                </a>
                <ul className="dropdown-menu ml-6">
                  <li>
                    <Link className="dropdown-item" to="/spanish">Spanish</Link>
                  </li>
                  <li>
                  <Link className="dropdown-item" to="/english">English</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
