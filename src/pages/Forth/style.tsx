import styled from "styled-components";

export const ForthCss = styled.div<{ color: string }>`
  padding-top: 2.5rem;
  .chat {
    padding: 1.5rem 2rem;
    width: 74.149%;
    border: 3px solid var(${(state) => state.color});
    border-radius: 1.5rem;
    display: flex;
    margin: 0 auto;
  }
  .text {
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
  }
  .nextBtn {
    margin-left: 1rem;
    position: unset;
    width: auto;
    height: auto;
    transform: translate(0, 0);
    img {
      width: 60px;
      height: 60px;
    }
  }
  .name {
    margin-top: 1.5rem;
    font-size: 20px;
    line-height: 150%;
  }
  .speaker {
    max-width: 1008px;
    width: 100%;
    display: flex;
    column-gap: 4.5rem;
    justify-content: center;
    align-items: end;

    top: 400px;
    left: 50%;
    transform: translate(-50%, 0);
  }
  .active {
    margin-bottom: 1.5rem;
  }
`;
