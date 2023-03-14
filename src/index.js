import React from "react";
import ReactDOM from "react-dom";

const object = {
  color: "red",
  fontSize: "20px",
  textAlign: "center"
};
ReactDOM.render(
  <h1 style={object}>Hello World!</h1>,
  document.getElementById("root")
);
