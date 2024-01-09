import styles from "./Status.module.scss";

const Status = ({ status, classes }) => {
  return <p className={classes}>{status}</p>;
};

export default Status;
