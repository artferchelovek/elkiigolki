import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import ChooseCity from "./components/Main/ChooseCity";
import Picture from "/src/assets/picture.svg";
import Massa from "/src/assets/puples.svg";
import Predrpim from "/src/assets/shex.svg";

export default function App() {
  const [status, SetStatus] = useState(0);
  const [Hide, SetHidden] = useState("picture");
  const [visibleCity, SetVisiblCity] = useState(false);
  const [warning, SetWarning] = useState("display: none");

  if (status > 59) {
    const keys = document.getElementById("keys").value;
    const cities = document.getElementById("cities").value;
    return <Header cities={cities} keys={keys} status={status} />;
  }

  function City() {
    SetVisiblCity(true);
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
      <ChooseCity counter={SetStatus} count={status} status={visibleCity} />
      <input className="hide" defaultValue={""} id="cities" type="text" />
      <div className={Hide}>
        <img onClick={City} className="pic" src={Picture} alt="" />
        <img src={Predrpim} className="shex" />
        <div className="trava">
          <p className="warning">
            Нажмите на дом, чтобы выбрать город оказания услуги ___ Нажмите на
            персонажа, чтобы выбрать ваш статус
          </p>
        </div>
        <img onClick={PlusProcess} className="nas" src={Massa} alt="" />
      </div>
    </>
  );
}
