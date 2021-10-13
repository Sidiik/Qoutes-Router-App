import React from "react";
import { Route, useParams } from "react-router";
import Highligtht from "./Highl.js/Index";

const Details = () => {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <Highligtht />
    </div>
  );
};

export default Details;
