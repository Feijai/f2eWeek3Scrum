import styled from "styled-components";
import catBlue from "../../assets/catBlue.png";
import catYellow from "../../assets/catYellow.png";

export const CatCardCss1 = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  .contain {
    max-width: 478px;
    background-image: url(${catBlue});
    padding: 43px 52px 17px 127px;
  }
  .text {
    font-weight: 400;
    font-size: 20px;
    // line-height: 150%;
    color: var(--text-gray);
    left: 26.57%;
    top: 35.83%;
  }
`;

export const CatCardCss2 = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: end;
  .contain {
    max-width: 478px;
    background-image: url(${catYellow});
    padding: 43px 127px 17px 52px;
  }
  .text {
    font-weight: 400;
    font-size: 20px;
    // line-height: 150%;
    color: var(--text-gray);
    left: 26.57%;
    top: 35.83%;
  }
`;

export const CatCardCss3 = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: end;
  .contain {
    border: 3px dashed #ffcb2d;
    border-radius: 60px;
  }
  .text {
    font-weight: 400;
    font-size: 20px;
    color: var(--yellow);
    left: 26.57%;
    top: 35.83%;
  }
`;
