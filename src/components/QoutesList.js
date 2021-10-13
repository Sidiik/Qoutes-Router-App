import React from "react";
import QouteItem from "./QouteItem";
import styles from "./item.module.css";

const QoutesList = ({ data }) => {
  return (
    <div className={styles.listContainer}>
      <h1>All Qoutes</h1>
      {data.map((data) => (
        <QouteItem data={data} key={data.id} />
      ))}
    </div>
  );
};

export default QoutesList;
