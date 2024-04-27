import classes from "./ChooseRole.module.css";
import Mother from "/src/assets/main/mother.svg";
import Child from "/src/assets/main/school.svg";
import Student from "/src/assets/main/stud.svg";
import Prepdr from "/src/assets/main/buis.svg";
import { useEffect, useState } from "react";

import stud from "/src/assets/main/mascot/stud.svg";
import mamka from "/src/assets/main/mascot/mamka.svg";
import valera from "/src/assets/main/mascot/people.svg";
import shkol from "/src/assets/main/mascot/shkol.svg";

export default function ChooseRole({ mascot, count, counter, status, setvis }) {
  const [visible, SetVisible] = useState(`${classes.main}`);
  useEffect(() => {
    // visible of block of text
    if (status) {
      SetVisible(`${classes.main} ${classes.active}`);
    } else {
      SetVisible(`${classes.main}`);
    }
  }, [status]);

  function Ya() {
    setvis(false);
    counter(count + 20);
  }

  return (
    <div className={visible}>
      <section>
        <div onClick={Ya} className={classes.sphere}>
          <img src={Mother} alt="" />
          <p>Родитель</p>
        </div>

        <div onClick={Ya} className={classes.sphere}>
          <img src={Student} alt="" />
          <p>Студент</p>
        </div>
      </section>

      <section>
        <div onClick={Ya} className={classes.sphere}>
          <img src={Child} alt="" />
          <p>Школьник</p>
        </div>
        <div onClick={Ya} className={classes.sphere}>
          <img src={Prepdr} alt="" />
          <p>Предприниматель</p>
        </div>
      </section>
    </div>
  );
}
