import React from "react";
import { Link } from "react-router-dom";

import { BiBone } from "react-icons/bi";

const HomePage: React.FC = () => {
  const listSubPages = [
    { name: "food", path: "products/food" },
    { name: "toys", path: "products/toys" },
    { name: "clothes", path: "products/clothes" },
    { name: "shoes & accessories", path: "products/accessories" },
  ];

  return (
    <div className="grid md:grid-cols-2 w-full h-screen pt-24 bg-shiba-yellow">
      <div className="bg-shiba-smile w-full h-full bg-cover animate-fade-in"></div>

      <div className="md:mt-[30%] animate-fade-in">
        <h1 className="text-5xl ">Welcome to Tada & Shiba shop</h1>
        <p className="mt-5 mb-10">There is everything Shiba wants in here.</p>
        <ul className="mt-5 ml-5 grid gap-5 w-6/12 capitalize">
          {listSubPages.map((element, index) => (
            <li className="hover:animate-tilt-shaking" key={index}>
              <Link
                className="grid grid-flow-col gap-2.5 p-2 items-center bg-white hover:underline hover:text-amber-700 rounded-xl"
                to={element.path}
              >
                <BiBone />
                <p>{element.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
