import styles from "./DateAndTime.module.scss";

const DateAndTime = ({ dateDay, dateMonth, timeHours, timeMinutes }) => {
  return (
    <div>
      <p className={styles.date}>
        {dateMonth} {dateDay}
      </p>

      <p className={styles.time}>
        {timeHours >= 12 ? timeHours - 12 : timeHours}:{timeMinutes}{" "}
        {timeHours >= 12 ? "pm" : "am"}
      </p>
    </div>
  );
};

export default DateAndTime;
