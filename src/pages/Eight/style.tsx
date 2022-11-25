import styled from "styled-components";

export const EightCss = styled.div<{ done: boolean }>`
  padding-top: 160px;
  padding-bottom: 120px;
  .topChat {
    left: 50%;
    top: 12px;
    transform: translate(-50%, 0);
    display: flex;
  }
  .mainCard {
    padding: 96px 83px;
  }
  .title {
    color: var(--yellow);
    font-size: 32px;
  }
  hr {
    opacity: 0.3;
    background-color: var(--yellow);
    border: 1.5px solid var(--yellow);
  }
  .fdc {
    row-gap: 1.5rem;
  }
  .pageButton {
    bottom: 40px;
  }

  .canHover {
    &:hover {
      border: 3px dashed var(--yellow);
    }
  }
  .active {
    background: rgba(255, 203, 45, 0.2);
    border: 3px solid #ffcb2d;
  }
  .disableButton{
    width:${state => state.done? "376px": "203px"};
  }
`;

export const ChooseCardCss = styled.div<{ checked: boolean }>`
  width: 473px;
  height: 140px;
  background: rgba(255, 249, 246, 0.1);
  border-radius: 88px;
  color: var(--text-gray);
  font-size: 24px;
  line-height: 150%;
  padding: 16px 32px;
  .check {
    width: 60px;
    height: 60px;
  }
  .text {
    margin-left: 29px;
  }
  &:hover {
    .button {
      display: none;
    }
  }
`;
