import React, { useState } from "react";
import { MainCard } from "../../components/MainCard";
import { EightCss } from "./style";
import po_sit from "../../assets/po_sit.png";
import po_chat from "../../assets/po_chat.png";
import po_chat2 from "../../assets/po_chat2.png";
import ChooseCard from "./ChooseCard";
import StartBtn from "../../components/StartBtn";

const betterData = [
  "這次我幫很多人救火欸！",
  "大家在開發上都會互相 Cover，讓任務都可以準時完成！",
];
const improveData = [
  "可以記錄這次的開發時間，讓預估團隊點數可以更精準。",
  "開發預估時間不準確，請後端下次改進，以免影響到我。",
];

const Eight = () => {
  const [page, setPage] = useState(1);
  const [disable, setDisable] = useState(false);
  const [checkItem, setCheckItem] = useState([]);

  const handleClick = () => {
    page === 1 ? setPage(2) : setPage(1);
  };

  console.log("===checkItem===", checkItem);
  return (
    <EightCss className="position-relative">
      <div className="dCenter ">
        <MainCard width={"100%"} height={"616px"} className="mainCard ">
          {page === 2 && (
            <>
              <div className="d-flex" style={{ columnGap: "44px" }}>
                <div className="fdc">
                  <h2 className="title text-center">做得好的地方</h2>
                  <>
                    {betterData.map((ele, idx) => (
                      <ChooseCard
                        text={ele}
                        key={idx}
                        checkItem={checkItem}
                        setCheckItem={setCheckItem}
                      />
                    ))}
                  </>
                </div>
                <hr />
                <div className="fdc">
                  <h2 className="title text-center">有哪些可以做得更好</h2>
                  <>
                    {improveData.map((ele, idx) => (
                      <ChooseCard
                        text={ele}
                        key={idx}
                        checkItem={checkItem}
                        setCheckItem={setCheckItem}
                      />
                    ))}
                  </>
                </div>
              </div>
              <StartBtn to={""} text={"完成挑戰"} disable={disable} />
            </>
          )}
        </MainCard>

        <div className="topChat position-absolute">
          <img src={po_sit} alt="" className="poSit" />
          <button
            onClick={() => {
              if (page === 1) handleClick();
            }}
            className="d-flex poChat "
            style={{ marginTop: "12px", marginLeft: "1rem" }}
          >
            {page === 1 && <img src={po_chat} alt="" className="" />}
          </button>
          {page === 2 && (
            <img
              src={po_chat2}
              alt=""
              className=""
              style={{ height: "120px" }}
            />
          )}
        </div>
      </div>
    </EightCss>
  );
};

export default Eight;
