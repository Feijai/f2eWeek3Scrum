import styled from "styled-components";

interface NextBtnProps {
    onClick: (e: Event) => void;
}

export const NextBtnCss = styled.button<NextBtnProps>`
        position:absolute;
        width: 104px;
        height: 104px;
        bottom:4rem;
        left:50%;
        transform:translate(-50%,0);
`