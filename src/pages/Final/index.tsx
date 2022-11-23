import React from "react";
import { FinalCss } from "./style";
import StartBtn from "../../components/StartBtn";
import family from "../../assets/family.png";
export default function Final() {
  return (
    <FinalCss className="position-relative">
      <img src={family} alt="" className="family" />
        <p className="position-absolute"></p>
      <StartBtn to={""} text={"重新開始"} disable={true} />
    </FinalCss>
  );
}
