import React from "react";
import "./Footer.css";
import raj from "../../assests/raj.jpg";
import sachin from "../../assests/sachin.jpg";
import Profile from "./Profile/Profile";
const Footer = () => {
	const Sachin = {
		name: "Sachin Yadav",
		Intro:
			"Hi there! I'm a BCA student skilled in web development technologies, experienced with NodeJS, ReactJS, Spring Boot, created some user-friendly websites with very interacitve UI/UX desings, checkout my social media handles.",
		img: {sachin},
		linkedIn: "https://www.linkedin.com/in/sachin-yadav-37b39b260",
		github: "https://github.com/SinniS1",
		mail: "sachinyadav30112001@gmail.com",
	};
	const Raj = {
		name: "Rajvinder Singh",
		Intro:
			"Hi there! I'm a BCA student with expertise in Android development. I'm skilled in Java, Kotlin, and Linux, and have created several user-friendly apps that are available on the internet, checkout my social media handles.",
		img: { raj },
		linkedIn: "https://www.linkedin.com/in/rajvinder-singh-62341b185",
		github: "https://github.com/sudouserraj",
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
				<div>made with 💖 by GEEKS😎💻</div>
				{/* <div className="line"></div> */}
				{/* <div>terahero554@gmail.com</div> */}
			</div>
		</div>
	);
};

export default Footer;
