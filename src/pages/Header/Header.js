import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <h3>Great Qoutes</h3>
      <div className={styles.links}>
        <NavLink
          className={styles.linkss}
          activeClassName={styles.active}
          to="/addQoutes"
        >
          <p>Add qoute</p>
        </NavLink>
        <p>
          <NavLink
            className={styles.linkss}
            activeClassName={styles.active}
            to="/qoutes"
          >
            View Qoutes
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Header;
