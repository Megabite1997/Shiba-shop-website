import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import ImageLogo from "../assets/Logo.png";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartContext from "../store/cart-context";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar: React.FC = () => {
  const CartCtx = useContext(CartContext);

  return (
    <header className="fixed w-full flex bg-antiquewhite items-center justify-end p-4 shadow-lg">
      <Link className="mr-auto" to="/">
        <img className="w-28 md:w-32 lg:w-44" src={ImageLogo} alt="Logo" />
      </Link>

      <div className="md:hidden">
        <GiHamburgerMenu />
      </div>

      <nav className="hidden md:block">
        <ul className="list-none m-0 p-0 flex w-full md:gap-8 lg:gap-14 xl:gap-20 lg:mr-10  items-center">
          <li className="md:text-sm lg:text-base lg:ml-10 font-medium">
            <NavLink
              to="products"
              className={({ isActive }) =>
                isActive
                  ? "peer flex items-center gap-2 text-amber-600 "
                  : "peer flex items-center gap-2 hover:text-amber-600"
              }
            >
              Products <RiArrowDropDownLine size={30} />
            </NavLink>
            <div className="absolute bg-white hidden peer-hover:flex hover:flex flex-col w-28 shadow-xl">
              <NavLink className="hover:bg-slate-200 p-2" to="products/food">
                Food
              </NavLink>
              <NavLink className="hover:bg-slate-200 p-2" to="products/treats">
                Treats
              </NavLink>
              <NavLink className="hover:bg-slate-200 p-2" to="products/toys">
                Toys
              </NavLink>
              <NavLink className="hover:bg-slate-200 p-2" to="products/clothes">
                Clothes
              </NavLink>
              <NavLink
                className="hover:bg-slate-200 p-2"
                to="products/grooming"
              >
                Grooming
              </NavLink>
            </div>
          </li>

          <li className="md:text-sm lg:text-base font-medium">
            <NavLink
              to="about-us"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center gap-2 text-amber-600 "
                  : "flex items-center gap-2 hover:text-amber-600"
              }
            >
              About us
            </NavLink>
          </li>
          <li className="md:text-sm lg:text-base font-medium">
            <NavLink
              to="contact-us"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center gap-2 text-amber-600 "
                  : "flex items-center gap-2 hover:text-amber-600"
              }
            >
              Contact Us
            </NavLink>
          </li>
          <li className="md:text-sm lg:text-base font-medium">
            <NavLink
              to="login"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center gap-2 text-amber-600 "
                  : "flex items-center gap-2 hover:text-amber-600"
              }
            >
              Login / Register <VscAccount />
            </NavLink>
          </li>
          <li className="md:text-sm lg:text-base font-medium">
            <NavLink
              to="cart"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center gap-2 text-amber-600 "
                  : "flex items-center gap-2 hover:text-amber-600"
              }
            >
              Cart <AiOutlineShoppingCart />
              <div className="bg-white py-1 px-3 rounded-full">
                {CartCtx.cart.length}
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
