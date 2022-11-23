import React, { useState, useEffect } from "react";
import { ForthCss } from "./style";
import { MainCard } from "../../components/MainCard";
import NextBtn from "../../components/NextBtn";
import poSmall from "../../assets/po_small.png";
import smSmall from "../../assets/sm_small.png";
import dev1Small from "../../assets/dev1_small.png";
import dev2Small from "../../assets/dev2_small.png";
import lineYellow from "../../assets/lineYellow.png";
import linePink1 from "../../assets/linePink1.png";
import linePink2 from "../../assets/linePink2.png";
import lineBlue1 from "../../assets/lineBlue1.png";
import lineBlue2 from "../../assets/lineBlue2.png";
import { textData } from "./textData";
import textBr from "../../components/TextBr";

export default function Forth() {
  const [page, setPage] = useState(1);
  const [color, setColor] = useState("--yellow");
  const handleClick = () => {
    page < 6 ? setPage(page + 1) : setPage(1);
  };

  useEffect(() => {
    if (page === 1 || page === 4) setColor("--yellow");
    if (page === 2 || page === 3) setColor("--purple");
    if (page === 5 || page === 6) setColor("--blue");
  }, [page]);

  const text: any = (page: any) => {
    const text = textData.filter((ele) => ele.page === page)[0];
    const ans = text.text.split("@HIGHLIGHT@").map((ele, idx) => {
      return idx === 0 ? (
        <React.Fragment key={idx}>{textBr(ele)}</React.Fragment>
      ) : (
        <React.Fragment key={idx}>
          <span className="highLight">{text.highLight[idx - 1]}</span>
          {textBr(ele)}
        </React.Fragment>
      );
    });
    return ans;
  };

  return (
    <ForthCss className="position-relative" color={color}>
      <div className="dCenter">
        <MainCard width={"100%"} height={"537px"}>
          <div className="chat">
            <p className="text">{text(page)}</p>
            <NextBtn handleClick={handleClick} color={color} />
          </div>
        </MainCard>
      </div>
      <div className="position-absolute speaker">
        <div
          className={`position-relative ${
            page === 2 || page === 3 ? "active" : null
          }`}
          style={{ height: "276px" }}
        >
          <img src={poSmall} alt="" className="" />
          <p className="name text-center">PO 小敏</p>
          {page === 2 && (
            <img
              src={linePink2}
              alt=""
              className="position-absolute"
              style={{
                width: "40px",
                height: "197px",
                right: "-11px",
                top: "-210px",
              }}
            />
          )}
          {page === 3 && (
            <img
              src={linePink1}
              alt=""
              className="position-absolute"
              style={{
                width: "40px",
                height: "197px",
                right: "-11px",
                top: "-150px",
              }}
            />
          )}
        </div>
        <div
          className={`position-relative ${
            page === 1 || page === 4 ? "active" : null
          }`}
          style={{ height: "306px" }}
        >
          <img src={smSmall} alt="" className="" />
          <p className="name text-center">SM 小捷</p>

          {(page === 1 || page === 4) && (
            <img
              src={lineYellow}
              alt=""
              className="position-absolute"
              style={{
                width: "23px",
                height: "198px",
                left: "-11px",
                top: "-125px",
              }}
            />
          )}
        </div>
        <div
          className={`position-relative ${page === 5 ? "active" : null}`}
          style={{ height: "326px" }}
        >
          <img src={dev1Small} alt="" className="" />
          <p className="name text-center">開發 小碼</p>
          {page === 5 && (
            <img
              src={lineBlue1}
              alt=""
              className="position-absolute"
              style={{
                width: "23px",
                height: "188px",
                right: "-11px",
                top: "-155px",
              }}
            />
          )}
        </div>
        <div
          className={`position-relative ${page === 6 ? "active" : null}`}
          style={{ height: "301px" }}
        >
          <img src={dev2Small} alt="" className="" />
          <p className="name text-center">開發 小扣</p>
          {page === 6 && (
            <img
              src={lineBlue2}
              alt=""
              className="position-absolute"
              style={{
                width: "26px",
                height: "157px",
                left: "-11px",
                top: "-155px",
              }}
            />
          )}
        </div>
      </div>
    </ForthCss>
  );
}
