import React from "react";
import { useNavigate } from "react-router-dom";
import "../IntroPage/IntroPage.css";
import "./Cards.css";
const Cards = ({ darkMode, category, title, content, cardID, page }) => {
	const navigate = useNavigate();
	const openPage = () => {
		navigate(`/${category}`);
	};
	const openPostPage = (id, page) => {
		navigate(`/PostPage/${page}/${id}`);
	};
	return (
		<div className={`Cards IntroContent ${darkMode ? "darkIntroContent" : "lightIntroContent"}`}>
			<div onClick={() => openPostPage(cardID, page)} className="cardDiv">
				<div className={`${darkMode ? "darkNetWiz" : "NetWiz"}`}>{title}</div>
				<div className={`para ${darkMode ? "darkPara" : "lightPara"}`}>{content} </div>
			</div>
			<div
				onClick={() => {
					openPage();
				}}
				className={`${category ? "category" : ""}`}
			>
				{category ? `@${category}` : ""}
			</div>
		</div>
	);
};

export default Cards;
