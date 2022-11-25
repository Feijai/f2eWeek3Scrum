import React from "react";
import { Link } from "react-router-dom";

interface StartBtnProps {
  to: string;
  text: string;
  disable: boolean;
  handleClick?: any;
}

const StartBtn: React.FC<StartBtnProps> = ({
  to,
  text,
  disable,
  handleClick,
}) => {
  return (
    <Link to={to}>
      {disable ? (
        <button
          className="text-black position-absolute pageButton"
          onClick={() => {
            if (handleClick) {
              handleClick.forEach((ele: any) => ele());
            }
          }}
        >
          {text}
        </button>
      ) : (
        <button className="text-white position-absolute pageButton disableButton">
          {text}
        </button>
      )}
    </Link>
  );
};

export default StartBtn;
