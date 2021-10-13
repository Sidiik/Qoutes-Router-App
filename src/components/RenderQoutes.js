import React from "react";
import QoutesList from "./QoutesList";

const RenderQoutes = () => {
  const Dummy_Data = [
    { id: Math.random(), text: "Have the bird and flee it" },
    { id: Math.random(), text: "Every dog has a day" },
  ];
  return (
    <>
      <QoutesList data={Dummy_Data} />
    </>
  );
};

export default RenderQoutes;
