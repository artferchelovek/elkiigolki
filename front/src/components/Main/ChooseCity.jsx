import { useEffect, useState } from "react";
import classes from "./ChooseCity.module.css";
import Lupa from "/src/assets/main/lupa.svg";
import { cities } from "/src/data.js";

export default function ChooseCity({ status, counter, count, setvis }) {
  const [visible, SetVisible] = useState(`${classes.block}`);
  const [Value, SetValues] = useState("");
  const [Cities, SetCities] = useState([]);

  useEffect(() => {
    // visible of block of text
    if (status) {
      SetVisible(`${classes.block} ${classes.active}`);
    } else {
      SetVisible(`${classes.block}`);
    }
  }, [status]);

  return (
    <div className={visible}>
      <div className={classes.inputblock}>
        <input
          value={Value}
          onChange={(event) => {
            SetValues(event.target.value);
            if (event.target.value.length > 1) {
              SetCities(
                cities.filter((value) => value.includes(event.target.value))
              );
            }
          }}
          placeholder="Начните вводить свой город, например: Новокузнецк"
          className={classes.input}
          type="text"
        />
        <img src={Lupa} alt="" />
      </div>

      <div className={classes.ChooseCity}>
        {Cities.map((city) => (
          <div key={city} className={classes.City}>
            {city}
            <button
              onClick={() => {
                document.getElementById("cities").value = city;
                if (document.getElementById("cities") != null) {
                  counter(count + 20);
                  setvis(false);
                }
              }}
            >
              Выбрать
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
