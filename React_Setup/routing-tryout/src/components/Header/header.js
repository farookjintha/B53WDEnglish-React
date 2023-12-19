import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-brand ">
          <Link className="logo" to="/">
            MySocialMediaApp
          </Link>
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <span className="nav-link">
              <Link className="comp-link" to={"/"}>
                Home
              </Link>
            </span>
            <span className="nav-link">
              <Link className="comp-link" to={"/messages"}>
                Messages
              </Link>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
