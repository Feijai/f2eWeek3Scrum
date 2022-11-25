import React from "react";
import { HeaderCss } from "./style";
import { useLocation,useNavigate } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import leftArrow from "../../assets/leftArrow.png";

interface HeaderProps {
  now: number;
  backPage: Function;
}

const Header: React.FC<HeaderProps> = ({ now, backPage }) => {
  const location = useLocation();
  const navigate =useNavigate()
  return (
    <HeaderCss>
      <div>
        {location.pathname !== "/" && (
          <button
            className="back"
            onClick={() => {
              backPage();
              navigate(-1);
            }}
          >
            <img src={leftArrow} alt="" />
            &nbsp;回上一頁
          </button>
        )}
      </div>
      <div className="dCenter">
        <ProgressBar animated now={now} label={`${now}%`} />
      </div>
    </HeaderCss>
  );
};

export default Header;
