import React from "react";
import { Link } from "react-router-dom";

import classes from "./Home.module.css";
import { BiBone } from "react-icons/bi";

const HomePage: React.FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.column1}></div>

      <div className={classes.column2}>
        <h1 className={classes.title}>Welcome to Tada shiba shop</h1>
        <p className={classes.subtitle}>
          There is everything Shiba wants in here.
        </p>
        <ul className={classes[`shop-list`]}>
          <li>
            <Link to="food">
              <BiBone />
              <p>food</p>
            </Link>
          </li>
          <li>
            <Link to="toys">
              <BiBone />
              <p>toys</p>
            </Link>
          </li>
          <li>
            <Link to="clothes">
              <BiBone />
              <p>clothes</p>
            </Link>
          </li>
          <li>
            <Link to="shop-and-accessories">
              <BiBone />
              <p>shoes & accessories</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
