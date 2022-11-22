import styled from "styled-components";
import catBlue from "../../assets/catBlue.png";
import catBlueFoot from "../../assets/catBlueFoot.png";
import catYellow from "../../assets/catYellow.png";
import catYellowFoot from "../../assets/catYellowFoot.png";

export const CatCardCss1 = styled.div<{ isDrag: boolean }>`
  width: 100%;
  height: ${(state) => (state.isDrag ? "168px!important" : "120px")};
  display: flex;
  .contain {
    max-width: 478px;
    background-image: url(${(state) => (state.isDrag ? catBlueFoot : catBlue)});
    padding: ${(state) =>
      state.isDrag ? "0px 52px 17px 127px" : "43px 52px 17px 127px"};
    transform: ${(state) => (state.isDrag ? "rotate(15deg)!important" : "")};
  }
  .text {
    font-weight: 400;
    font-size: 20px;
    color: var(--text-gray);
  }
`;

export const CatCardCss2 = styled.div<{ isDrag: boolean }>`
  width: 100%;
  height: ${(state) => (state.isDrag ? "168px!important" : "120px")};
  display: flex;
  justify-content: end;
  .contain {
    max-width: 478px;
    background-image: url(${(state) =>
      state.isDrag ? catYellowFoot : catYellow});
    padding: ${(state) =>
      state.isDrag ? "0px 127px 17px 52px" : "43px 127px 17px 52px"};
    transform: ${(state) => (state.isDrag ? "rotate(-15deg)!important" : "")};
  }
  .text {
    font-weight: 400;
    font-size: 20px;
    color: var(--text-gray);
  }
`;

export const CatCardCss3 = styled.div<{ haveItem: boolean }>`
  width: 100%;
  height: 111px;
  display: flex;
  justify-content: end;
  border: ${(state) => (state.haveItem ? "0px" : "3px dashed #ffcb2d")};
  border-radius: 60px;
  .contain{
    width:100%;
    height:100%;
  }
  .text {
    font-weight: 400;
    font-size: 20px;
    color: var(--yellow);
  }
`;

export const CatCardCss4 = styled.div`
  width: 100%;
  max-width: 546px;
  height: 111px;
  background-color: var(--yellow);
  border-radius: 60px;
  display:flex;
  justify-content: space-around;
  align-items:center;
  .catFace {
    flex-direction: column;
    width: 48.15px;
    height: 25.4px;
  }
  .eye {
    width: 6.13px;
    height: 12.26px;
  }
  .mouth {
    width: 11.38px;
    height: 7.01px;
    margin-top: 6.13px;
  }
  .symbolsDrag{
    width:48px;
    height:48px;
  }
`;
