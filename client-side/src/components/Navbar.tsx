import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import LogoShiba from "../assets/shiba/shiba-logo.png";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartContext from "../store/cart-context";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useAuth } from "../store/auth-context";

const Navbar: React.FC = () => {
  const CartCtx = useContext(CartContext);
  const { isAuthenticated } = useAuth();

  return (
    <header className="fixed w-full flex bg-white items-center justify-end p-2 px-10 shadow-lg">
      <Link className="mr-auto" to="/">
        <img className="w-12 md:w-16" src={LogoShiba} alt="Logo Shiba" />
      </Link>

      <div className="md:hidden">
        <GiHamburgerMenu className="peer" />
        <div className="absolute bg-slate-100 hidden peer-hover:flex hover:flex flex-col w-28 shadow-xl right-4">
          <NavLink className="hover:bg-slate-200 p-2" to="products">
            Products
          </NavLink>
          <NavLink className="hover:bg-slate-200 p-2" to="about-us">
            About Us
          </NavLink>
          <NavLink className="hover:bg-slate-200 p-2" to="contact-us">
            Contact Us
          </NavLink>
          {isAuthenticated ? (
            <NavLink className="hover:bg-slate-200 p-2" to="login">
              Loigin / Register
            </NavLink>
          ) : (
            <NavLink to="/user-account"></NavLink>
          )}
          <NavLink className="hover:bg-slate-200 p-2" to="cart">
            Cart
          </NavLink>
        </div>
      </div>

      <nav className="hidden md:block">
        <ul className="list-none m-0 p-0 flex w-full md:gap-8 lg:gap-14 xl:gap-20 items-center md:text-sm lg:text-lg">
          <li className="lg:ml-10">
            <NavLink
              to="products"
              className={({ isActive }) =>
                isActive
                  ? "peer flex items-center gap-2 text-amber-600"
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

          <li>
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
          <li>
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
          <li>
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
          <li>
            <NavLink
              to="cart"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center gap-2 text-amber-600 "
                  : "flex items-center gap-2 hover:text-amber-600"
              }
            >
              Cart <AiOutlineShoppingCart />
              <div className="bg-slate-200 py-1 px-3 rounded-full">
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
