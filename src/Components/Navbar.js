import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav>
        <Link to="/" id="links">
          Home
        </Link>
        <Link to="/about" id="links">
          About
        </Link>
        <Link to="/contact" id="links">
          Contact
        </Link>

        <Link to="/example1" id="links">
          Use State
        </Link>
        <Link to="/objects" id="links">
          Object Array
        </Link>
        <Link to="/objectarrayhw" id="links">
          Object Array HW
        </Link>
        <Link to="/effects" id="links">
          Use Effects
        </Link>
        <Link to="/apihw" id="links">
          API HW
        </Link>
        <Link to="/productsapi" id="links">
          Products API
        </Link>
      </nav>
    </>
  );
}

export default NavBar;
