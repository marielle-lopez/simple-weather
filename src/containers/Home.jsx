import { useState, useEffect } from "react";
import styles from "./Home.module.scss";

import Condition from "../components/Condition/Condition";
import DateAndTime from "../components/DateAndTime/DateAndTime";
import Location from "../components/Location/Location";
import Temperature from "../components/Temperature/Temperature";
import Status from "../components/Status/Status";

export const Home = () => {
  const [information, setInformation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [classes, setClasses] = useState([styles.wrapper]);

  const month = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
  };

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const url =
          "https://api.weatherapi.com/v1/current.json?key=deaee7e239224b5c83c90948231612&q=auto:ip";

        console.log("Fetching data...");

        const response = await fetch(url).then((res) => res.json());

        const lastUpdated = new Date(response.current.last_updated.split(" "));

        const monthNumber = lastUpdated.getMonth();
        const monthDay = lastUpdated.getDate();
        const timeHours = lastUpdated.getHours();
        const timeMinutes = lastUpdated.getMinutes();

        const data = {
          dateMonth: month[monthNumber],
          dateDay: monthDay,
          timeHours: timeHours,
          timeMinutes: timeMinutes,
          location: response.location.name,
          temperature: response.current.temp_c,
          feelsLikeTemperature: response.current.feelslike_c,
          status: response.current.condition.text,
          humidity: response.current.humidity,
          wind: response.current.wind_kph,
        };

        setInformation(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div className={classes.join(" ")}>
      <div className={styles.information_wrapper}>
        <Temperature temperature={information.temperature} />
        <Status status={information.status} />
      </div>
      <div className={styles.detailed_information_wrapper}>
        <div className={styles.detailed_information}>
          <Location location={information.location} />
          <DateAndTime
            dateMonth={information.dateMonth}
            dateDay={information.dateDay}
            timeHours={information.timeHours}
            timeMinutes={information.timeMinutes}
          />
          <div className={styles.conditions}>
            <Condition
              condition={information.humidity}
              unit="%"
              type="Humidity"
            />
            <Condition condition={information.wind} unit="kph" type="Wind" />
          </div>
        </div>
      </div>
    </div>
  );
};
