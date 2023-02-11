import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../IntroPage/IntroPage.css"
import "./Cards.css"
const Cards = ({ darkMode, category, title, content }) => {
    const navigate = useNavigate()
    const openPage = () => {
        navigate(`/${category}`)
    }
    return (
        <div className={`Cards IntroContent ${darkMode ? "darkIntroContent" : "lightIntroContent"}`}>
            <div className="NetWiz">{title}</div>
            <div className={`para ${darkMode ? "darkPara" : "lightPara"}`}>{content} </div>
            <div onClick={() => { openPage() }} className={category ? "category" : ""}>{category ? `@${category}` : ""}</div>
        </div>

    )
}

export default Cards