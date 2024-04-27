import progres from "./ProgressBar.module.css";
import PeopleLogo from "/src/assets/header/people.svg";
import ShopIcon from "/src/assets/header/supermarket.svg";
import HouseIcon from "/src/assets/header/house.svg";

export default function ProgresBar({ proc }) {
  console.log(proc);
  const fill = {
    height: "62px",
    borderBottom: "5px solid #e7dd1a",
    borderRadius: "5px",
    width: `${proc}%`,
    opacity: "5",
    background: "none",
    fontSize: "48px",
    position: "absolute",
  };

  return (
    <div className={progres.ProgressContent}>
      <div style={fill}></div>
      <img src={PeopleLogo} alt="" />
      <img src={ShopIcon} alt="" />
      <img src={HouseIcon} alt="" />
    </div>
  );
}
