import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// deactivate the styling and content for now.
// We will restore it later
/*
const h1Style = { color: "blue", fontSize: "28", border: "2px solid black" };
let greeting = "Hello";

const today = new Date();
const time = today.getHours();

if (time > 18) {
  greeting = "Good night";
  h1Style.color = "black";
} else if (time > 12) {
  greeting = "Good evening";
  h1Style.color = "gray";
} else {
  greeting = "Good morning";
  h1Style.color = "red";
}
*/

ReactDOM.render(<App />, document.getElementById("root"));
