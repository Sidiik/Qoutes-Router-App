import React from "react";
import { Route, useParams } from "react-router";
import Highligtht from "./Highl.js/Index";

const Details = () => {
  const params = useParams();
  const Dummy_Data = [
    { id: "Q1", text: "Have the bird and flee it" },
    { id: "Q2", text: "Every dog has a day" },
  ];
  const qoute = Dummy_Data.find((qoute) => qoute.id === params.qouteID);
  console.log(qoute, "IN HERE");
  return (
    <div>
      <Highligtht qoute={qoute} />
    </div>
  );
};

export default Details;
