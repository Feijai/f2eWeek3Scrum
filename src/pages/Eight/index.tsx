import React, { useState, useEffect } from "react";
import { MainCard } from "../../components/MainCard";
import { EightCss } from "./style";
import po_sit from "../../assets/po_sit.png";
import po_chat from "../../assets/po_chat.png";
import po_chat2 from "../../assets/po_chat2.png";
import ChooseCard from "./ChooseCard";
import StartBtn from "../../components/StartBtn";
import { arrCompare, QuesProps } from "../../utils/process";
import { PageProps } from "../../utils/interfaces";

const betterData = [
  "這次我幫很多人救火欸！",
  "大家在開發上都會互相 Cover，讓任務都可以準時完成！",
];
const improveData = [
  "可以記錄這次的開發時間，讓預估團隊點數可以更精準。",
  "開發預估時間不準確，請後端下次改進，以免影響到我。",
];

const Eight: React.FC<PageProps> = ({ nextPage }) => {
  const [page, setPage] = useState(1);
  const [disable, setDisable] = useState(false);
  const [checkItem, setCheckItem] = useState<QuesProps>({ q1: null, q2: null });
  const [done, setDone] = useState(false);
  const handleClick = () => {
    page === 1 ? setPage(2) : setPage(1);
  };

  const handleAnswer = () => {
    let count = 0;
    Object.values(checkItem).forEach((ele) => {
      count += ele ? 1 : 0;
    });
    return count === Object.keys(checkItem).length;
  };

  useEffect(() => {
    setDone(handleAnswer());
    setDisable(arrCompare(checkItem, { q1: 2, q2: 1 }));
  }, [checkItem]);

  console.log(done);
  return (
    <EightCss className="position-relative" done={done}>
      <div className="dCenter ">
        <MainCard width={"100%"} height={"616px"} className="mainCard ">
          {page === 2 && (
            <>
              <div className="d-flex" style={{ columnGap: "44px" }}>
                <div className="fdc">
                  <h2 className="title text-center">做得好的地方</h2>
                  <>
                    {betterData.map((ele, idx) => {
                      return (
                        <ChooseCard
                          text={ele}
                          key={idx}
                          ques={"q1"}
                          itemNum={idx + 1}
                          checkItem={checkItem}
                          setCheckItem={setCheckItem}
                        />
                      );
                    })}
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
                        ques={"q2"}
                        itemNum={idx + 1}
                        checkItem={checkItem}
                        setCheckItem={setCheckItem}
                      />
                    ))}
                  </>
                </div>
              </div>
              {done ? (
                disable ? (
                  <StartBtn
                    to={"/final"}
                    text={"完成挑戰"}
                    disable={disable}
                    handleClick={[nextPage]}
                  />
                ) : (
                  <StartBtn
                    to={""}
                    text={"確定不再看一下嗎？"}
                    disable={disable}
                  />
                )
              ) : (
                <StartBtn to={""} text={"完成挑戰"} disable={disable} />
              )}
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
