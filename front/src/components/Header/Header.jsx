import { useEffect, useState } from "react";
import classes from "./Header.module.css";
import input from "./Input.module.css";
import Lupa from "/src/assets/header/icon.svg";
import progres from "./ProgressBar.module.css";
import ProgresBar from "./ProgresBar";
import Pushka from "/src/assets/header/pushka.svg";

const url = "http://127.0.0.1:5000";

export default function Header({ status, keys, cities, counter }) {
  const [value, SetValue] = useState("");
  const [openProgres, setProgress] = useState(false);
  const [visibles, SetVisible] = useState(`${classes.pushkaez}`);

  function SetKey(press) {
    if (press.key == "Enter") {
      counter(status + 20);
      document.getElementById("progr").classList.add(`${progres.active}`);
    }
  }

  if (status > 59) {
    const [db, InstallDB] = useState([]);
    useEffect(() => {
      const Data = {
        key: keys,
        city: cities,
      };
      async function SendData(data) {
        const response = await fetch(url, {
          method: "POST",
          headers: new Headers({
            "ngrok-skip-browser-warning": "69420",
            "Content-type": "application/json",
          }),
          body: JSON.stringify(data),
        });

        const NewData = await response.json();

        InstallDB(NewData.title);
      }

      SendData(Data);
    }, []);

    useEffect(() => {
      if (db.length > 0) {
        SetVisible(`${classes.pushka}`);
      }
    });
    return (
      <header>
        <div className={classes.headerstyle}>
          <div className={input.input}>
            <input
              placeholder="Начните вводить текст"
              value={keys}
              type="text"
            />
            <img src={Lupa} alt="" />
          </div>
          <div
            id="progr"
            className={`${progres.ProgressBar} ${progres.active}`}
          >
            <ProgresBar proc={status} />
          </div>
        </div>
        <div className={classes.mainmenu}>
          {db.map((note) => (
            <div key={note.id} className={classes.choose}>
              <li>
                <p className={classes.title}>{note.services}</p>
              </li>
              <p className={classes.descr}>{note.otvets}</p>
            </div>
          ))}

          <div className={visibles}>
            <img className={classes.pushkaimg} src={Pushka} alt="" />
            <p className={classes.sorry}>
              В Вашем городе, пока нет такой услуги
            </p>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className={classes.header}>
      <div className={input.input}>
        <input
          placeholder="Начните вводить текст"
          value={value}
          onChange={(event) => SetValue(event.target.value)}
          type="text"
          onKeyDown={SetKey}
        />
        <img src={Lupa} alt="" />
      </div>

      <div
        id="progr"
        className={
          openProgres
            ? `${progres.ProgressBar} ${progres.active}`
            : progres.ProgressBar
        }
      >
        <ProgresBar proc={status} />
      </div>

      <input id="keys" value={value} type="text" />
    </header>
  );
}
