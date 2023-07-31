import React from 'react'
import Dev from '../components/Footer/Developers/Dev'
import IntroPage from '../components/IntroPage/IntroPage'

const Developers = ({ darkMode }) => {
    return (
        <div className={`ContentPage ${darkMode ? "dark" : "light"}`}>
            <div className='Developers'>
                <IntroPage darkMode={darkMode} typingEffect={false} PageName={"About Us"} />
                <Dev darkMode={darkMode} />
            </div>
        </div>

    )
}

export default Developers