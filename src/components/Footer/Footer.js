import React from 'react'
import "./Footer.css"
import img from "../../assests/img1.png"
import Profile from './Profile/Profile'
const Footer = () => {
    const Sachin = {
        name: "Sachin Yadav",
        Intro: "I am a Web Developer, UI/UX designer, I created some of the best website available on Internet, You can follow me on these social media platforms.",
        img: { img },
        linkedIn: "https://www.linkedin.com/in/sachin-yadav-37b39b260",
        github: "https://github.com/SinniS1",
        mail: "sachinyadav30112001@gmail.com"
    }
    const Raj = {
        name: "Rajvinder",
        Intro: "I am a Android Developer, I created some of the best android applicaitons available on Internet, You can follow me on these social media platforms.",
        img: { img },
        linkedIn: "https://www.linkedin.com/in/sachin-yadav-37b39b260",
        github: "https://github.com/SinniS1",
        mail: "sachinyadav30112001@gmail.com"
    }
    return (
        <div className='Footer'>
            <div className="profiles">
                <div><Profile Info={Sachin} /></div>
                <div><Profile Info={Raj} /></div>
            </div>
            <div className="footerContent">
            </div>
        </div>

    )
}

export default Footer