import React from 'react'
import "../IntroPage/IntroPage.css"
import "./Cards.css"
const Cards = ({ darkMode, categorie, title, content }) => {
    return (
        <div className={`Cards IntroContent ${darkMode ? "darkIntroContent" : "lightIntroContent"}`}>
            <div className="heading">{categorie}</div>
            <div className="NetWiz">{title}</div>
            <div className={`para ${darkMode ? "darkPara" : "lightPara"}`}>{content} </div>
        </div>

    )
}

export default Cards