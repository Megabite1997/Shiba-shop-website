import React from "react";
import { Link } from "react-router-dom";

import classes from "./Home.module.css";
import { BiBone } from "react-icons/bi";

const HomePage: React.FC = () => {
  const listSubPages = [
    { name: "food", path: "food" },
    { name: "toys", path: "toys" },
    { name: "clothes", path: "clothes" },
    { name: "shoes & accessories", path: "accessories" },
  ];

  return (
    <div className={classes.container}>
      <div className={classes.column1}></div>

      <div className={classes.column2}>
        <h1 className="text-5xl">Welcome to Tada & Shiba shop</h1>
        <p className="mt-5 mb-10">There is everything Shiba wants in here.</p>
        <ul className="mt-5 ml-5 grid gap-5 w-6/12 capitalize">
          {listSubPages.map((element, index) => (
            <li key={index}>
              <Link
                className="flex gap-2.5 p-2 items-center bg-white hover:underline hover:text-amber-700 rounded-xl"
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
