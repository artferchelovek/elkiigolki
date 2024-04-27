import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import ChooseCity from "./components/Main/ChooseCity";
import Picture from "/src/assets/picture.svg";
import Massa from "/src/assets/puples.svg";
import Predrpim from "/src/assets/shex.svg";
import ChooseRole from "./components/Main/ChooseRole";

import stud from "/src/assets/main/mascot/stud.svg";
import mamka from "/src/assets/main/mascot/mamka.svg";
import valera from "/src/assets/main/mascot/people.svg";
import shkol from "/src/assets/main/mascot/shkol.svg";

export default function App() {
  const [status, SetStatus] = useState(0);
  const [Hide, SetHidden] = useState("picture");
  const [visibleCity, SetVisiblCity] = useState(false);
  const [warning, SetWarning] = useState("display: none");
  const [visibleRole, SetVisibleRole] = useState(false);
  const [stylse, SetMascotStyles] = useState("mamka");

  if (status > 59) {
    const keys = document.getElementById("keys").value;
    const cities = document.getElementById("cities").value;
    return <Header cities={cities} keys={keys} status={status} />;
  }

  function City() {
    SetVisiblCity(true);
  }

  function Role() {
    SetVisibleRole(true);
  }

  function PlusProcess() {
    SetStatus(status + 20);
  }

  return (
    <>
      <input
        value={status}
        className="hide"
        id="counter"
        type="number"
        onChange={(value) => SetStatus(value.target.value)}
      />
      <Header counter={SetStatus} status={status} />
      <ChooseCity
        setvis={SetVisiblCity}
        counter={SetStatus}
        count={status}
        status={visibleCity}
      />
      <ChooseRole
        mascot={SetMascotStyles}
        setvis={SetVisibleRole}
        counter={SetStatus}
        count={status}
        status={visibleRole}
      />
      <input className="hide" defaultValue={""} id="cities" type="text" />
      <div className={Hide}>
        <img onClick={City} className="pic" src={Picture} alt="" />
        <div className="trava">
          <p className="warning">
            Нажмите на персонажа, чтобы выбрать ваш статус ___ Нажмите на дом,
            чтобы выбрать город оказания услуги
          </p>
        </div>

        <div onClick={Role} className="nas">
          <img src={Predrpim} className={stylse} />
          <img className={stylse} src={mamka} alt="" />
          <img className={stylse} src={shkol} alt="" />
          <img className={stylse} src={stud} alt="" />
        </div>
      </div>
    </>
  );
}
