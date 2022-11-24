import styled from "styled-components";
import family from "../../assets/family.png";

export const FinalCss = styled.div`
  padding-top: 8px;
  height: 896px;
  display: flex;
  justify-content: center;
  .family {
    width: 1200px;
    height: 715px;
    background-image: url(${family});
  }
  .text {
    left: 59.08%;
    top: 24.615%;
    font-size: 32px;
    line-height: 150%;
    color: var(--dark);
  }
`;
