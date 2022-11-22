import React from "react";
import { ForthCss } from "./style";
import { MainCard } from "../../components/MainCard";

export default function Forth() {
  return (
    <ForthCss>
      <MainCard width={"100%"} height={"640px"}>
        p嗨！你是新來的前端勇者吧！ 我是祭司小捷，也就是 Scrum
        Master，我的工作主要是促成開發騎士們的協作、引導團隊進行自省會議，以及提升騎士團團員對Scrum的了解。
      </MainCard>
    </ForthCss>
  );
}
