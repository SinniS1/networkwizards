import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = ({ darkMode }) => {
	return (
		<footer className={`Footer ${darkMode ? 'darkFooter' : "lightFooter"}`}>
			<div>
				<div>made with 💖 by GEEKS😎💻</div>
			</div>
			<Link className="link" to={"/Developers"}>
				Meet 👩‍💻 Developers 🚀
			</Link>
		</footer>
	);
};

export default Footer;
