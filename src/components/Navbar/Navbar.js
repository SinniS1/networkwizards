/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Navbar.css";
import box1 from "../../assests/box1.png";
import { Link } from "react-router-dom";
const Navbar = ({ toggleDarkMode, darkMode, SearchValue }) => {
	const [tglNav, setTglNav] = useState(true);
	const toggleNav = () => {
		setTglNav((tglNav) => !tglNav);
	};
	const [input, setInput] = useState("");
	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			SearchValue(input);
		}
	};
	const notFocus = () => {
		setTimeout(() => {
			SearchValue("");
			setInput("");
		}, 1000);
	};
	return (
		<div className={`Navbar ${darkMode ? "darkNavbar" : "lightNavbar"}`}>
			<span>
				<Link className="nav-link" to={"/"}>
					<img className="logo" alt="nothing" src={box1}></img>
				</Link>
			</span>
			<ul className={`${tglNav ? "switchNav" : "lists"} ${darkMode ? "darkLists" : "lightLists"}`}>
				<li>
					{" "}
					<Link className={darkMode ? "darkLink" : "nav-link"} to={"/Hacking"}>
						Hacking
					</Link>{" "}
				</li>
				<li>
					<Link className={darkMode ? "darkLink" : "nav-link"} to={"/Coding"}>
						Coding
					</Link>{" "}
				</li>
				<li>
					<Link className={darkMode ? "darkLink" : "nav-link"} to={"/Networking"}>
						Networking
					</Link>{" "}
				</li>
				<li>
					<label className="switch">
						<input type="checkbox" onClick={toggleDarkMode} />
						<span className="slider"></span>
					</label>
				</li>
				<li>
					<div className={`input-box`}>
						<input
							onBlur={() => notFocus()}
							type="text"
							className={darkMode ? "darkSearch" : ""}
							placeholder="Search blog"
							value={input}
							onChange={(e) => setInput(e.target.value)}
							onKeyDown={handleKeyDown}
						/>
					</div>
				</li>
			</ul>
			<div className="switched">
				<input type="checkbox" onClick={toggleNav} />
				<div>
					<span className="line-1"></span>
					<span className="line-2"></span>
					<span className="line-3"></span>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
