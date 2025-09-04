import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul style={{ listStyleType: "none", display: "flex", gap: "20px" }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
