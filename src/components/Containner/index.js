import React from "react";
import "./style.css";

function Containner(props) {
  return <div className="containner">{props.children}</div>;
}

export default Containner;
