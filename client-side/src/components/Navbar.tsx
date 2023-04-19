import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import ImageLogo from "../assets/Logo.png";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartContext from "../store/cart-context";

const Navbar: React.FC = () => {
  const CartCtx = useContext(CartContext);

  const listNavbarLinks = [
    { name: "Products", path: "products" },
    { name: "About Us", path: "about-us" },
    { name: "Contact Us", path: "contact-us" },
    { name: "Login / Register", path: "login" },
    { name: "Cart", path: "cart" },
  ];

  return (
    <header className="fixed w-full flex bg-antiquewhite items-center justify-end p-4 shadow-lg">
      <Link className="mr-auto" to="/">
        <img className="w-44" src={ImageLogo} alt="Logo" />
      </Link>

      <nav>
        <ul className="list-none m-0 p-0 flex w-full gap-20 mr-10">
          {listNavbarLinks.map((element, index) => (
            <li className="text-lg font-medium" key={index}>
              <NavLink
                to={element.path}
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-2 text-amber-600 "
                    : "flex items-center gap-2 hover:text-amber-600"
                }
              >
                {element.path === "login" ? <VscAccount /> : undefined}
                {element.path === "cart" ? (
                  <>
                    <div className="bg-white py-1 px-3 rounded-full">
                      {CartCtx.cart.length}
                    </div>
                    <AiOutlineShoppingCart />
                  </>
                ) : undefined}
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
