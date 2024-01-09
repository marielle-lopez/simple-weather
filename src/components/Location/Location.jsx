import styles from "./Location.module.scss";

const Location = ({ location }) => {
  return <p className={styles.text}>{location}</p>;
};

export default Location;
