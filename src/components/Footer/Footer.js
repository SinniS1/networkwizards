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
            <div className="footer1">
                <div className="profiles">
                    <div><Profile Info={Sachin} /></div>
                    <div><Profile Info={Raj} /></div>
                </div>
                <div className="line"></div>
                <div className="AboutUs">
                    <div className="heading">AboutUs</div>
                    <div className="AboutInfo"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis sapiente laborum tempora quis dicta ipsa sunt commodi omnis sit aspernatur quisquam modi placeat nulla reprehenderit eligendi repellat quia, distinctio, asperiores molestias hic dolorem et? Exercitationem vel alias rerum officiis! Ab, libero qui cumque ducimus praesentium explicabo? Ut beatae facere repellat.Fuck you</div>
                </div>
            </div>
            <div className="footerContent">
                <div>Sachin</div>
                <div className="line"></div>
                <div>Rajvinder</div>
                <div className="line"></div>
                <div>emailAddress@gmal.com</div>
            </div>
        </div>

    )
}

export default Footer