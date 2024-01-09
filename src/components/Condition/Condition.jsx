import styles from "./Condition.module.scss";

const Condition = ({ condition, unit, type }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{type.toUpperCase()}</p>
      <p className={styles.measurement}>
        {condition} {unit}
      </p>
    </div>
  );
};

export default Condition;
