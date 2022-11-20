import React from 'react'
import { ThirdCss } from './style'
import { MainCard } from '../../components/MainCard'
import chat from '../../assets/chat.png'
import poSit from '../../assets/po_sit.png'
import StartBtn from '../../components/StartBtn'

const Third: React.FC = () => {
    return (
        <ThirdCss className='position-relative'>

            <div className="dCenter cards">
                <MainCard width={'594px'} height={'604px'}>
                    
                </MainCard>
                <MainCard width={'594px'} height={'604px'}>

                </MainCard>
            </div>
            <StartBtn to={''} text={'完成清單'} disable={false} />
            <img src={chat} alt="" className='chat position-absolute' />
            <img src={poSit} alt="" className='poSit position-absolute' />
        </ThirdCss>
    )
}
export default Third