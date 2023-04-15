import React from "react";
import { NavLink, Link } from "react-router-dom";
import ImageLogo from "../assets/Logo.png";

const Navbar: React.FC = () => {
  const listNavbarLinks = [
    { name: "Products", path: "products" },
    { name: "About Us", path: "about-us" },
    { name: "Contact Us", path: "contact-us" },
    { name: "Login / Register", path: "login" },
  ];

  return (
    <header className="fixed w-full flex bg-antiquewhite items-center justify-end p-4 shadow-lg">
      <Link className="mr-auto" to="/">
        <img className="w-44" src={ImageLogo} alt="Logo" />
      </Link>

      <nav>
        <ul className="list-none m-0 p-0 flex w-full gap-20 mr-10">
          {listNavbarLinks.map((element, index) => (
            <li key={index}>
              <NavLink
                to={element.path}
                className={({ isActive }) =>
                  isActive ? "text-amber-600 " : "hover:text-amber-600"
                }
              >
                {element.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
