import React from 'react'
import "./Dev.css"
import raj from "../../../assests/raj.jpg";
import sachin from "../../../assests/sachin.jpg";
import Profile from "../Profile/Profile";
const Dev = ({ darkMode }) => {
    const Sachin = {
        name: "Sachin Yadav",
        img: { sachin },
        Intro: process.env.REACT_APP_SACHIN_INTRO,
        linkedIn: process.env.REACT_APP_SACHIN_LINKEDIN,
        github: process.env.REACT_APP_SACHIN_GITHUB,
        mail: process.env.REACT_APP_SACHIN_GMAIL,
    };
    const Raj = {
        name: "Rajvinder Singh",
        Intro: process.env.REACT_APP_RAJ_INTRO,
        img: { raj },
        linkedIn: process.env.REACT_APP_RAJ_LINKEDIN,
        github: process.env.REACT_APP_RAJ_GITHUB,
        mail: process.env.REACT_APP_RAJ_GMAIL,
    };
    // const Info1 = `Welcome to NetworkWizards.tech, where coding, hacking, and computer networking meet. Our aim is to provide you with comprehensive, up-to-date information and knowledge on these exciting and rapidly evolving fields.`;
    // const Info2 = `We are a team of two BCA students, passionate about technology and its impact on the world. Our web developer Sachin Yadav creates interactive and engaging content, while our post writer Rajvinder Singh ensures the content is easily digestible and informative. Together, we strive to make technology accessible to everyone, regardless of their background or experience`;

    return (
        <div className={`footer1 ${darkMode ? "darkMode" : 'lightMode'}`}>
            {/* <div className="AboutUs">
                <div className="heading">About Us</div>
                <div className="AboutInfo">
                    {Info1} <br /> <br />
                    {Info2}
                </div>
            </div> */}
            <div className="profiles">
                <div>
                    <Profile Info={Sachin} />
                </div>
                <div>
                    <Profile Info={Raj} />
                </div>
            </div>
        </div>
    )
}

export default Dev