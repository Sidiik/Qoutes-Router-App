import React from "react";
import QoutesList from "./QoutesList";

const RenderQoutes = () => {
  const Dummy_Data = [
    { id: "Q1", text: "Have the bird and flee it" },
    { id: "Q2", text: "Every dog has a day" },
  ];
  return (
    <>
      <QoutesList data={Dummy_Data} />
    </>
  );
};

export default RenderQoutes;
