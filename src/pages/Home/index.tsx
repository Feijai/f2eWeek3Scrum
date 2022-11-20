import React from 'react'
import { HomeCss } from './style'
import { MainCard } from '../../components/MainCard'
import StartBtn from '../../components/StartBtn'
import king from '../../assets/king.png'

const Home: React.FC = () => {
    return (
        <HomeCss className='position-relative'>
            <div className="dCenter">
                <MainCard width={'100%'} height={'640px'}>
                    勇者！歡迎來到TT資訊王國，我是TT King<br />
                    在正式加入王國的敏捷騎士團以前，需要請你先了解騎士團的
                    <span className="highLight">Scrum流程與精神</span>
                    <br /><br />
                    請跟隨我一起通過Scrum新手村的挑戰任務吧！
                    <StartBtn to={''} text={'開始任務'} disable={true}/>
                </MainCard>
                <img src={king} alt="" className='pBottomEnd' />
            </div>
        </HomeCss>
    )
}

export default Home