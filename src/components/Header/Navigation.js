import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/register">
          Register
        </NavLink>
      </li>
      <li>
        <NavLink to="/login">
          Login
        </NavLink>
      </li>
      <li>
        <NavLink to="/contacts">
          Contacts
        </NavLink>
      </li>
    </ul>
  );
}

export default Navigation;