import { useState } from "react";
import styles from "./Temperature.module.scss";

const Temperature = ({ temperature, classes }) => {
  return <p className={classes}>{temperature}°C</p>;
};

export default Temperature;
