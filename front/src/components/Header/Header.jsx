import { useEffect, useState } from "react";
import classes from "./Header.module.css";
import input from "./Input.module.css";
import Lupa from "/src/assets/header/icon.svg";
import progres from "./ProgressBar.module.css";
import ProgresBar from "./ProgresBar";

const url = "https://662e-5-44-172-64.ngrok-free.app";

export default function Header({ status, keys, cities, counter }) {
  const [value, SetValue] = useState("");
  const [openProgres, setProgress] = useState(false);
  const [visible, SetVisible] = useState(`${classes.pushka}`);

  function SetKey(press) {
    if (press.key == "Enter") {
      console.log(value);
      counter(status + 20);
      console.log(document.getElementById("progr"));
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

        console.log(NewData.title);

        InstallDB(NewData.title);
      }

      SendData(Data);

      console.log(db);

      if (db.length == 0) {
        SetVisible(`${classes.pushaez}`);
      }
    }, []);

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
        </div>
        <div className={visible}>
          <h1>хуя се</h1>
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
