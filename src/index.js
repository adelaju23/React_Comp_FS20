import React from "react";
import ReactDOM from "react-dom";

const h1Style = { color: "red", fontSize: "28", border: "2px solid black" };
const greeting = "Hello";

ReactDOM.render(
  <div>
    <h1 style={h1Style}>{greeting} everybody</h1>
  </div>,
  document.getElementById("root")
);
