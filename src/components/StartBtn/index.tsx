import React from 'react'
import { Link } from 'react-router-dom'

interface StartBtnProps {
    to: string;
    text: string;
    disable: boolean;
}

const StartBtn: React.FC<StartBtnProps> = ({ to, text, disable }) => {

    return (
        <Link to={to}>
            {disable ?
                <button className='text-black position-absolute pageButton'>
                    {text}
                </button>
                : <button className='text-white position-absolute pageButton disableButton'>
                    {text}
                </button>

            }

        </Link>
    )
}

export default StartBtn 
