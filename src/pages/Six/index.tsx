import React, { useState } from "react";
import { MainCard } from "../../components/MainCard";
import { SixCss } from "./style";
import avatar_dev1 from "../../assets/avatar_dev1.png";
import chat_dev1 from "../../assets/chat_dev1.png";
import avatar_dev2 from "../../assets/avatar_dev2.png";
import chat_dev2 from "../../assets/chat_dev2.png";
import avatar_me from "../../assets/avatar_me.png";
import chat_me from "../../assets/chat_me.png";
import NextBtn from "../../components/NextBtn";
import confluenceLogo from "../../assets/confluence-logo.png";
import { PageProps } from "../../utils/interfaces";
import { useNavigate } from "react-router-dom";

const Six: React.FC<PageProps> = ({ nextPage }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (page === 1) {
      nextPage();
      setPage(2)}
    if (page === 2) {
      nextPage();
      navigate("/seven");
    }
  };
  const [page, setPage] = useState(1);
  return (
    <SixCss>
      <div className="dCenter">
        {page === 1 && (
          <MainCard
            width={"100%"}
            height={"736px"}
            className="mainCard position-relative"
          >
            <div className="chat d-flex align-items-center">
              <img src={avatar_dev1} alt="" className="avatar" />
              <img
                src={chat_dev1}
                alt=""
                className="chat1"
                style={{ marginLeft: "1rem" }}
              />
            </div>
            <div className="chat d-flex" style={{ marginTop: "1rem" }}>
              <img src={avatar_dev2} alt="" className="avatar" />
              <img
                src={chat_dev2}
                alt=""
                className="chat2"
                style={{ marginLeft: "1rem" }}
              />
            </div>
            <div
              className="chat d-flex align-items-center justify-content-end"
              style={{ marginTop: "1rem" }}
            >
              <img src={chat_me} alt="" className="chatMe" />
              <img src={avatar_me} alt="" className="avatar" />
            </div>
            <NextBtn handleClick={handleClick} />
          </MainCard>
        )}
        {page === 2 && (
          <MainCard
            width={"100%"}
            height={"736px"}
            className="mainCard2 position-relative"
          >
            <div className="meetingCard">
              <h2 className="title text-center">每日短衝會議</h2>
              <p className="theme text-center">Daily Scrum</p>
              <p className="text">
                每天都要進行的會議，以 15 分鐘為限制
                <br />
                <ul>
                  <li>
                    昨天為團隊的
                    <span className="highLight">短衝目標(Sprint Goal)</span>
                    做了那些進度
                  </li>
                  <li>今天我會如何準備來幫助團隊達到短衝目標</li>
                  <li>過程中有遇到什麼問題、難題</li>
                </ul>
                透過團隊分享，追蹤大家的工作狀況。
              </p>
            </div>
            <div className="meetingCard">
              <h2 className="title text-center">短衝檢視會議</h2>
              <p className="theme text-center">Sprint Review</p>
              <p className="text text-center">
                用來檢視該次短衝增量的成果，以蒐集相關的回饋數據或意見。
              </p>
            </div>
            <div className="meetingCard ">
              <h2 className="title text-center">短衝自省會議</h2>
              <p className="theme text-center">Sprint Retrospective</p>
              <p className="text">
                團隊在自省會議裡，會共同回顧該短衝歷程發生的事情
                <ul>
                  <li>好的地方</li>
                  <li>可以改進的地方</li>
                  <li>如何維持我們已有的成功經驗</li>
                </ul>
                優化工作流程、讓團隊有變得更好的機會。
                <br />
                推薦工具：
                <img src={confluenceLogo} alt="" />
              </p>
            </div>
            <NextBtn handleClick={handleClick} />
          </MainCard>
        )}
      </div>
    </SixCss>
  );
};

export default Six;
