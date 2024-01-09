import styles from "./Temperature.module.scss";

const Temperature = ({ temperature }) => {
  return <p className={styles.text}>{temperature}°C</p>;
};

export default Temperature;
