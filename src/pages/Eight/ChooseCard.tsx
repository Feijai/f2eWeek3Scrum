import React, { useState, useEffect } from "react";
import { ChooseCardCss } from "./style";
import defaultChecked from "../../assets/defaultChecked.png";
import hoverChecked from "../../assets/hoverChecked.png";
import checkedPic from "../../assets/checked.png";
import { QuesProps } from "../../utils/process";

interface ChooseCardProps {
  text: string;
  ques: string;
  itemNum: number;
  checkItem: QuesProps;
  setCheckItem: Function;
}

const ChooseCard: React.FC<ChooseCardProps> = ({
  text,
  ques,
  itemNum,
  checkItem,
  setCheckItem,
}) => {
  const [checkImg, setCheckImg] = useState(defaultChecked);
  const [checked, setChecked] = useState(false);
  const handleClick = () => {
    const obj = JSON.parse(JSON.stringify(checkItem));
    obj[ques] = obj[ques] === itemNum ? null : itemNum;
    setCheckItem(obj);
    setChecked(!checked);
  };

  useEffect(() => {
    if (checkItem[ques] !== itemNum) {
      setChecked(false);
      setCheckImg(defaultChecked);
    }
  }, [checkItem]);

  return (
    <ChooseCardCss
      className={`dCenter ${!checked ? "canHover" : "active"}`}
      onMouseOver={() => {
        if (!checked) setCheckImg(hoverChecked);
      }}
      onMouseLeave={() => {
        if (!checked) setCheckImg(defaultChecked);
      }}
      onClick={() => {
        handleClick();
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
