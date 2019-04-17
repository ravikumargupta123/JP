import React from "react";
import ReactDOM from "react-dom";
import Calender from "./Calender";
import Menu from "./Menu";

import "./styles.css";
let days = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday"
];
function App() {
  return (
    <React.Fragment>
      <Calender />
      <Menu />
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
