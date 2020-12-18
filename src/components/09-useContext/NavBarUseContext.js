import React from "react";
import { NavLink } from "react-router-dom";

export const NavBarUseContext = () => {
  return (
    <nav>
      <NavLink exact activeClassName="activeNav" to="/homecontext">
        Home
      </NavLink>
      <NavLink exact activeClassName="activeNav" to="/about">
        About
      </NavLink>
      <NavLink exact activeClassName="activeNav" to="/login">
        Login
      </NavLink>
    </nav>
  );
};
