import React from "react";
import "./dates.css";

function Dates(props) {
  const M = props.tym.toLocaleString("en-Us", { month: "long" });
  const D = props.tym.toLocaleString("en-Us", { day: "2-digit" });
  var Y = props.tym.getFullYear();
  return (
    <>
      <span className="xxx">
        {D}-{M}-{Y}
      </span>
    </>
  );
}

export default Dates;
