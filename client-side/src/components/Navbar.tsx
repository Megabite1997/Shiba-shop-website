import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.navbar}>
        <ul className={classes[`unorder-list`]}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="products"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Products
            </NavLink>
          </li>

          <li>
            <NavLink
              to="about-us"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              About Us
            </NavLink>
          </li>

          <li>
            <NavLink
              to="login"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Login
            </NavLink>
          </li>

          <li>
            <NavLink
              to="register"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Register
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
