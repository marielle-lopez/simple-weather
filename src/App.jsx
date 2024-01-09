import { useState } from "react";

import Condition from "./components/Condition/Condition";
import DateAndTime from "./components/DateAndTime/DateAndTime";
import Location from "./components/Location/Location";
import Temperature from "./components/Temperature/Temperature";

import styles from "./App.module.scss";

import { Home } from "./containers/Home";

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;
