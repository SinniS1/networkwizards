import React from 'react'
import "../IntroPage/IntroPage.css"
import "./Cards.css"
const Cards = ({ darkMode }) => {
    return (
        <div className={`Cards IntroContent ${darkMode ? "darkIntroContent" : "lightIntroContent"}`}>
            <div className="heading">Hello</div>
            <div className="NetWiz">Sachin</div>
            <div className={`para ${darkMode ? "darkPara" : "lightPara"}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores quod ex eveniet ratione unde, molestiae amet blanditiis vitae iusto voluptatum harum a, assumenda, magni tempore cum eligendi. Veniam, magnam optio?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, dolorem facilis aliquam quas, maxime distinctio, esse laudantium voluptatum sunt sint modi! Dicta ex obcaecati impedit, nihil quam dolor commodi veniam.</div>
        </div>

    )
}

export default Cards