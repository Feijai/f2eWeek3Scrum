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
              <h2 className="title text-center">??????????????????</h2>
              <p className="theme text-center">Daily Scrum</p>
              <p className="text">
                ????????????????????????????????? 15 ???????????????
                <br />
                <ul>
                  <li>
                    ??????????????????
                    <span className="highLight">????????????(Sprint Goal)</span>
                    ??????????????????
                  </li>
                  <li>?????????????????????????????????????????????????????????</li>
                  <li>???????????????????????????????????????</li>
                </ul>
                ???????????????????????????????????????????????????
              </p>
            </div>
            <div className="meetingCard">
              <h2 className="title text-center">??????????????????</h2>
              <p className="theme text-center">Sprint Review</p>
              <p className="text text-center">
                ????????????????????????????????????????????????????????????????????????????????????
              </p>
            </div>
            <div className="meetingCard ">
              <h2 className="title text-center">??????????????????</h2>
              <p className="theme text-center">Sprint Retrospective</p>
              <p className="text">
                ????????????????????????????????????????????????????????????????????????
                <ul>
                  <li>????????????</li>
                  <li>?????????????????????</li>
                  <li>???????????????????????????????????????</li>
                </ul>
                ?????????????????????????????????????????????????????????
                <br />
                ???????????????
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
