import React from "react";
import { FinalCss } from "./style";
import StartBtn from "../../components/StartBtn";
export default function Final() {
  return (
    <FinalCss className="position-relative">
      <div className="family position-relative">
        <p className="position-absolute text">
          恭喜新進勇者通過新手任務
          <br />
          歡迎加入開發騎士團！
        </p>
      </div>
      <StartBtn to={""} text={"重新開始"} disable={true} />
    </FinalCss>
  );
}
