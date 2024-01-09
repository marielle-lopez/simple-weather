import styles from "./Status.module.scss";

const Status = ({ status }) => {
  return <p className={styles.text}>{status}</p>;
};

export default Status;
