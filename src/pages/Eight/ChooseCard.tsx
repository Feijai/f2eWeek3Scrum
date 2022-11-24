import React, { useState } from "react";
import { ChooseCardCss } from "./style";
import defaultChecked from "../../assets/defaultChecked.png";
import hoverChecked from "../../assets/hoverChecked.png";
import checkedPic from "../../assets/checked.png";

interface ChooseCardProps {
  text: string;
  checkItem: string[];
  setCheckItem: Function;
}

const ChooseCard: React.FC<ChooseCardProps> = ({
  text,
  checkItem,
  setCheckItem,
}) => {
  const [checkImg, setCheckImg] = useState(defaultChecked);
  const [checked, setChecked] = useState(false);
  const handleClick = (item: string) => {
    let arr = [...checkItem];
    if (arr.length === 0) {
      arr.push(item);
    } else if (arr.length > 0) {
      arr.indexOf(item) !== -1
        ? arr.splice(arr.indexOf(item), 1)
        : arr.push(item);
    }
    setCheckItem(arr);
    setChecked(!checked);
  };

  console.log(checked);
  return (
    <ChooseCardCss
      className="dCenter"
      onMouseOver={() => {
        if (!checked) setCheckImg(hoverChecked);
      }}
      onMouseLeave={() => {
        if (!checked) setCheckImg(defaultChecked);
      }}
      onClick={() => {
        handleClick(text);
      }}
      checked={checked}
    >
      {!checked ? (
        <img src={checkImg} alt="" className="check" />
      ) : (
        <img src={checkedPic} alt="" className="check" />
      )}
      <p className="text">{text}</p>
    </ChooseCardCss>
  );
};

export default ChooseCard;
