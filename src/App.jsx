import { useState } from "react";

import Condition from "./components/Condition/Condition";
import DateAndTime from "./components/DateAndTime/DateAndTime";
import Location from "./components/Location/Location";
import Temperature from "./components/Temperature/Temperature";

import styles from "./App.module.scss";

import { Home } from "./containers/Home";

function App() {
  const [background, setBackground] = useState(styles.background__day_clear);

  return (
    <div className={background}>
      <Home setBackground={setBackground} />
    </div>
  );
}

export default App;
