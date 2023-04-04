import React from "react";
import { Link } from "react-router-dom";

import classes from "./Home.module.css";

const HomePage: React.FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.column1}></div>

      <div className={classes.column2}>
        <h1 className={classes.title}>Welcome to shiba inu shop</h1>
        <p className={classes.subtitle}>
          There is everything Shiba wants in here.
        </p>
        <ul className={classes[`shop-list`]}>
          <li>
            <Link to="food">food</Link>
          </li>
          <li>
            <Link to="toys">toys</Link>
          </li>
          <li>
            <Link to="clothes">clothes</Link>
          </li>
          <li>
            <Link to="shop-and-accessories">shoes & accessories</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
