import styled from "styled-components";
import sprint_map from "../../assets/sprint_map.png";

export const SevenCss = styled.div`
  padding-top: 40px;
  padding-bottom: 120px;
  .mainCard {
    padding: 40px;
  }
  .acatar {
    width: 120px;
    height: 120px;
  }
  .join {
    width: 647.5px;
    height: 90px;
  }

  .mainCard2 {
    padding: 48px 40px;
  }

  .todo {
    border: 3px dashed #ffcb2d;
    border-radius: 120px;
    padding: 1rem;
    column-gap: 12px;
    width: 85.357%;
    height: 104px;
    margin: 0 auto;
    display: flex;
  }
  .toDrop {
    background-image: url(${sprint_map});
    background-size: cover;
    width: 100%;
    height: 376px;
    margin-top: 2.5rem;
    position: relative;
  }

  .dropItem {
    width: 222px;
    height: 72px;
    border: 3px dashed var(--yellow);
    border-radius: 60px;
    color: var(--yellow);
  }

  .empty {
  }
  .toDrop4 {
    left: 148px;
    bottom: 12px;
  }
  .toDrop5 {
    top: 90px;
    left: 658px;
  }
  .toDrop6 {
    left: 644px;
    bottom: 12px;
  }
  .toDrop7 {
    left: 882px;
    bottom: 12px;
  }
  .full {
    border: 0;
    background: var(--yellow);
    color: var(--dark);
  }
  .pageButton {
    bottom: 40px;
  }
`;

export const MeetingCardCss = styled.div<{ isDrag: boolean }>`
  width: 222px;
  height: 72px;
  .contain {
    background: var(--yellow);
    color: var(--dark);
    border-radius: 60px;
    font-size: 24px;
    transform: ${(state) => (state.isDrag ? "rotate(-15deg)!important" : "")};
  }
`;
