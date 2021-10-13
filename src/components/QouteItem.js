import React from "react";
import { Link } from "react-router-dom";
import styles from "./item.module.css";

const QouteItem = ({ data }) => {
  return (
    <div className={styles.container}>
      <h3>{data.text}</h3>
      <Link to={`/qoutes/${data.id}`}>
        <button className={styles.btn}>View qoute</button>
      </Link>
    </div>
  );
};

export default QouteItem;
