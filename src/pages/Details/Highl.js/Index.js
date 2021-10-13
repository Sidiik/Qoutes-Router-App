import React from "react";
import styles from "./high.module.css";

const Highligtht = ({ qoute }) => {
  console.log(qoute);
  return (
    <div className={styles.container}>
      <h1>{qoute.text}</h1>
    </div>
  );
};

export default Highligtht;
