// import { Nav, Button } from "react-bootstrap";
import { CartFill } from "react-bootstrap-icons";
// import {useState} from "react";
import "bootstrap/js/dist/dropdown";
// import 'bootstrap/js/dist/util';

export default function Navg(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#!" style={{ fontSize: "25px" }}>
            Start Bootstrap
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#!">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="navbarDropdown nav-link dropdown-toggle"
                  id="navbarDropdown"
                  href="fghi"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#!">
                      All products
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#!">
                      Popular Items
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#!">
                      New Arrivals
                    </a>
                  </li>
                </div>
              </li>
            </ul>
            <form className="d-flex " style={{ gap: "20px" }}>
              <button
                className="btn btn-secondary btn-outline-dark"
                type="submit"
              >
                <CartFill />
                cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">
                  {props.cartCount}
                </span>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
