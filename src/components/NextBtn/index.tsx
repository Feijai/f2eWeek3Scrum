import React from 'react'
import { NextBtnCss } from './style'
import arrow from '../../assets/arrow_big_default.png'

interface NextBtnProps {
    handleClick: Function
}
const NextBtn: React.FC<NextBtnProps> = ({ handleClick }) => {
    return (
        <NextBtnCss onClick={() => handleClick()}><img src={arrow} alt="" /></NextBtnCss>
    )
}

export default NextBtn