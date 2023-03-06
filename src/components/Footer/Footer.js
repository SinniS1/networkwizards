import React from "react";
import "./Footer.css";
import raj from "../../assests/raj.png";
import sachin from "../../assests/sachin.jpg";
import Profile from "./Profile/Profile";
const Footer = () => {
	const Sachin = {
		name: "Sachin Yadav",
		Intro:
			"I am a Web Developer, UI/UX designer, I created some of the best website available on Internet, You can follow me on these social media platforms.",
		img: {sachin},
		linkedIn: "https://www.linkedin.com/in/sachin-yadav-37b39b260",
		github: "https://github.com/SinniS1",
		mail: "sachinyadav30112001@gmail.com",
	};
	const Raj = {
		name: "Rajvinder Singh",
		Intro:
			"I am a Android Developer, I created some of the best android applicaitons available on Internet, You can follow me on these social media platforms.",
		img: { raj },
		linkedIn: "https://www.linkedin.com/in/rajvinder-singh-62341b185",
		github: "https://github.com/itsrajpy",
		mail: "terahero554@gmail.com",
	};
	const Info1 = `Welcome to NetworkWizards.tech, where coding, hacking, and computer networking meet. Our aim is to provide you with comprehensive, up-to-date information and knowledge on these exciting and rapidly evolving fields.`;
	const Info2 = `We are a team of two BCA students, passionate about technology and its impact on the world. Our developer creates interactive and engaging content, while our post writer ensures the content is easily digestible and informative. Together, we strive to make technology accessible to everyone, regardless of their background or experience`;
	return (
		<div className="Footer">
			<div className="footer1">
				<div className="profiles">
					<div>
						<Profile Info={Sachin} />
					</div>
					<div>
						<Profile Info={Raj} />
					</div>
				</div>
				<div className="line"></div>
				<div className="AboutUs">
					<div className="heading">AboutUs</div>
					<div className="AboutInfo">
						{" "}
						{Info1} <br /> <br />
						{Info2}
					</div>
				</div>
			</div>
			<div className="footerContent">
				{/* <div>Sachin</div> */}
				{/* <div className="line"></div> */}
				{/* <div>Rajvinder</div> */}
				<div>CC made by GEEKS 💖😎</div>
				{/* <div className="line"></div> */}
				{/* <div>terahero554@gmail.com</div> */}
			</div>
		</div>
	);
};

export default Footer;
