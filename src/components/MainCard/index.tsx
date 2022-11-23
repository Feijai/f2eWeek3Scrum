import styled from "styled-components";
interface MainCardProps {
  width: string;
  height: string;
}

export const MainCard = styled.div<MainCardProps>`
  background-color: var(--dark);
  max-width: 1200px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 36px;
  padding: 4rem 101px;
  font-size: 28px;
  color: white;
  position: relative;
  .highLight {
    color: var(--yellow);
  }
  .totalHighLight {
    color: var(--purple);
  }
`;
