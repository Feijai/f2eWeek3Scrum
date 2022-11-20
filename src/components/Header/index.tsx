import React from 'react'
import { HeaderCss } from './style'
import ProgressBar from "react-bootstrap/ProgressBar";
import leftArrow from '../../assets/leftArrow.png'

interface HeaderProps {
    now: number;
}

const Header: React.FC<HeaderProps> = ({ now }) => {
    return (
        <HeaderCss>
            <div><button className='back'>
                <img src={leftArrow} alt="" />
                &nbsp;回上一頁
                </button></div>
            <div className='dCenter'><ProgressBar animated now={now} label={`${now}%`} /></div>
        </HeaderCss>
    )
}

export default Header