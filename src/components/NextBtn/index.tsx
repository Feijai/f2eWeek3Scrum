import React from "react";
import { NextBtnCss } from "./style";
import arrow from "../../assets/arrow_big_default.png";
import arrow_blue from '../../assets/arrow_blue.png'
import arrow_pink from '../../assets/arrow_pink.png'


interface NextBtnProps {
  handleClick: Function;
  color?:string
}
const NextBtn: React.FC<NextBtnProps> = ({ handleClick,color }) => {
  return (
    <NextBtnCss className="nextBtn" onClick={() => handleClick()}>
        {(!color || color==="--yellow" )&&<img src={arrow} alt="" />}
        {(color==="--purple" )&&<img src={arrow_pink} alt="" />}
        {( color==="--blue" )&&<img src={arrow_blue} alt="" />}
    </NextBtnCss>
  );
};

export default NextBtn;
