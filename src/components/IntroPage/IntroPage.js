import React, { useEffect, useRef } from "react";
import Box from "../Box/Box";
import "./IntroPage.css";

const IntroPage = ({ darkMode, typingEffect, PageName }) => {
	const textDisplay = useRef(null);
	const phrase = ["Coding", "Programming", "Networking"];
	const Pagename = useRef(null);
	useEffect(() => {
		let i = 0;
		let j = 0;
		let isDeleting = false;
		let currentPhrase = [];
		function loop() {
			if (textDisplay.current) {
				textDisplay.current.innerHTML = currentPhrase.join("");
			}
			if (i < phrase.length) {
				if (!isDeleting && j <= phrase[i].length) {
					currentPhrase.push(phrase[i][j]);
					j++;
				}
				if (isDeleting && j >= 0) {
					currentPhrase.splice(j, 1);
					j--;
				}
				if (j === phrase[i].length) {
					isDeleting = true;
				}
				if (isDeleting && j === -1) {
					isDeleting = false;
					j = 0;
					currentPhrase = [];
					i = (i + 1) % phrase.length;
				}
			}
			setTimeout(loop, 100);
		}
		loop();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className={`IntroPage `}>
			<div className={`IntroContent ${darkMode ? "darkIntroPage" : "lightIntroPage"} ${typingEffect ? "" : "Pages"}`}>
				<div className="heading">
					<span className={`${darkMode ? "darkIntroTitle" : "littleIntroTitle"}`}>Network Wizards</span>
				</div>
				<div className="changeContainer">
					<div className="changeCourses">
						<span className="Learn">
							Learn{" "}
							<span id="text" ref={typingEffect ? textDisplay : Pagename} className={`${darkMode ? "darkNetWiz" : "NetWiz"}`}>
								{PageName ? PageName : ""}
							</span>
						</span>
					</div>
				</div>
				<div className="introPara">
					NetworkWizards is a comprehensive resource for individuals interested in coding, computer networking, and cyber security. Our aim is to
					provide accessible and informative content to help you expand your skills in these exciting fields. From tutorials and how-to guides to the
					latest advancements, our website has everything you need to become a coding, networking, or security expert. Join our community of
					like-minded individuals and stay updated with our newsletter. NetworkWizards - your one-stop-shop for all things technology.
				</div>
				<Box />
			</div>
		</div>
	);
};

export default IntroPage;
