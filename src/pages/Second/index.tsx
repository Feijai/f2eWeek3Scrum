import React, { useState } from "react";
import { SecondCss } from "./style";
import { MainCard } from "../../components/MainCard";
import NextBtn from "../../components/NextBtn";
import StartBtn from "../../components/StartBtn";
import queen from "../../assets/queen.png";
import queen_hand from "../../assets/queen_hand.png";
import { PageProps } from "../../utils/interfaces";

const Second: React.FC<PageProps> = ({ nextPage }) => {
  const [page, setPage] = useState("1");
  const handleClick = () => {
    setPage("2");
  };

  return (
    <SecondCss className="position-relative">
      <div className="dCenter">
        {page === "1" ? (
          <>
            <MainCard width={"100%"} height={"640px"}>
              我是TT資訊王國．敏捷騎士團的軍師小敏
              <br />
              <br />
              用你們的話來說就是<span className="highLight">PO</span>，也就是
              <span className="highLight">產品負責人 Product Owner</span>
              <br />
              <br />
              PO會負責評估產品代辦清單的價值與重要性，依序排列要執行的優先順序，對齊產品目標，最後排出
              <span className="highLight">產品待辦清單 Product Backlog。</span>
              <NextBtn handleClick={handleClick} />
            </MainCard>
            <img src={queen} alt="" className="pBottomEnd" />
          </>
        ) : (
          <>
            <MainCard width={"100%"} height={"640px"}>
              剛好我手邊有一個「人才招募系統」的案子，我才剛列出了「產品需求清單」
              <br />
              <br />
              既然你都來了，來試試看
              <span className="highLight">
                調整產品優先度，排出產品代辦清單
              </span>
              吧！
              <StartBtn
                to={"/third"}
                text={"開始任務"}
                disable={true}
                handleClick={[nextPage]}
              />
            </MainCard>
            <img src={queen_hand} alt="" className="pBottomEnd" />
          </>
        )}
      </div>
    </SecondCss>
  );
};

export default Second;
